<?php

namespace Phoenix\Service;

interface IMail
{
    public function send(string $subject, string $body, String $toAddress);
}
