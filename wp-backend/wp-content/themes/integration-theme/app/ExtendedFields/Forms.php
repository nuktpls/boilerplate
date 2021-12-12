<?php

namespace App\ExtendedFields;

use WordPlate\Acf\Fields\Field;
use WordPlate\Acf\Fields\Attributes\ConditionalLogic;
use WordPlate\Acf\Fields\Attributes\Instructions;
use WordPlate\Acf\Fields\Attributes\Multiple;
use WordPlate\Acf\Fields\Attributes\Nullable;
use WordPlate\Acf\Fields\Attributes\Required;
use WordPlate\Acf\Fields\Attributes\ReturnFormat;
use WordPlate\Acf\Fields\Attributes\Wrapper;

/**
 * Register Gravity forms field
 */
class Forms extends Field {

  use ConditionalLogic;
  use Instructions;
  use Multiple;
  use Nullable;
  use Required;
  use ReturnFormat;
  use Wrapper;

  protected $type = 'forms';

}
