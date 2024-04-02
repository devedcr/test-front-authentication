<?php

namespace Phoenix\Service;

use Error;
use Exception;
use PHPMailer\PHPMailer\PHPMailer;

class Mailer implements IMail
{
    private PHPMailer $mail;

    public function __construct()
    {
        $this->mail = new PHPMailer(true);
    }

    public function send(string $subject, string $body, String $toAddress)
    {
        try {
            $this->mail->isSMTP();
            $this->mail->Host       = $_ENV["MAIL_HOST"];
            $this->mail->SMTPAuth   = true;
            $this->mail->Username   = $_ENV["MAIL_USER"];
            $this->mail->Password   = $_ENV["MAIL_PASSWORD"];
            $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $this->mail->Port       = 465;

            $this->mail->setFrom($_ENV["MAIL_USER"]);
            $this->mail->addAddress($toAddress);

            $this->mail->isHTML(true);
            $this->mail->Subject = $subject;
            $this->mail->Body    = $body;
            $this->mail->send();
        } catch (Exception $e) {
            throw new Exception("Failed Send Mail !!! " . $e->getMessage());
        }
    }
}
