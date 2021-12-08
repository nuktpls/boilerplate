<?php	
// Copy paste this on your function.php
// In the line:xxx
// Removing plugin controls from admin
function remove_plugin_controls($actions, $plugin_file, $plugin_data, $context){
 
 
  if (array_key_exists('edit', $actions)) {
    unset($actions['edit']);
  }
 
  if (array_key_exists('deactivate', $actions)) {
	  unset($actions['deactivate']);
  }
 
  if (array_key_exists('activate', $actions)) {
    unset($actions['activate']);
  }
 
  if (array_key_exists('delete', $actions)) {
    unset($actions['delete']);
  }
 
  return $actions;
 
}
add_filter('plugin_action_links', 'remove_plugin_controls', 10, 4);


// Remove bulk action options for managing plugins
function disable_bulk_actions($actions){
 
  if (array_key_exists('deactivate-selected', $actions)) {
    unset($actions['deactivate-selected']);
  }
 
 
  if (array_key_exists('activate-selected', $actions)) {
    unset($actions['activate-selected']);
  }
 
 
  if (array_key_exists('delete-selected', $actions)) {
    unset($actions['delete-selected']);
  }
 
 
  if (array_key_exists('update-selected', $actions)) {
    unset($actions['update-selected']);
  }
  
}
add_filter('bulk_actions-plugins','disable_bulk_actions');
