<?php

namespace App\PostTypes;

abstract class PostTypes {

    protected $postType = '';

    public function __construct() {
        $this->register();
    }

    protected function register() {
        register_extended_post_type(
            $this->postType,
            $this->setArgs(),
            $this->setNames()
        );
    }

    abstract protected function setArgs(): array;

    abstract protected function setNames(): array;

}
