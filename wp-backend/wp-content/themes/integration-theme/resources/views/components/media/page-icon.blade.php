@empty(!$attachment_id = get_field('icon', isset($id) && !empty($id) ? $id : get_the_ID()))
  @attachmentimage([
    'id'     => $attachment_id,
    'class'  => isset($class) && !empty($class) ? $class : '',
    'width'  => isset($width) && !empty($width) ? $width : '',
    'height' => isset($height) && !empty($height) ? $height : '',
  ])
@endempty
