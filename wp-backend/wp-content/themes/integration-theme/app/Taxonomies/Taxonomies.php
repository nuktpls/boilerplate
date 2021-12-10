<?php

namespace App\Taxonomies;

abstract class Taxonomies {

    protected $taxonomy = '';
    protected $objectType = '';

    public function __construct() {
        $this->register();
    }

    protected function register() {
        register_extended_taxonomy(
            $this->taxonomy,
            $this->objectType,
            $this->setArgs(),
            $this->setNames()
        );
    }

    abstract protected function setArgs(): array;

    abstract protected function setNames(): array;

}
