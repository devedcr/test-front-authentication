<?php

namespace Phoenix\Controller;

use Exception;
use Phoenix\Service\IMail;
use Phoenix\Service\Mailer;

class MailController
{
    private IMail $mail;
    private $subject;

    public function __construct()
    {
        $this->mail = new Mailer();
        $this->subject = "Phoenix Reset Password";
    }

    public function send()
    {
        $body = json_decode(file_get_contents('php://input'), true);
        $templateMail = file_get_contents(dirname(__DIR__) . "/Template/mail.php");
        try {
            //$this->mail->send($this->subject, $templateMail, $body["toAddress"]);
            echo json_encode(["ok" => true, "message" => "send mail success"]);
        } catch (Exception $error) {
            http_response_code(500);
            echo json_encode(["ok" => false, "message" => "send mail failed"]);
        }
    }
}
