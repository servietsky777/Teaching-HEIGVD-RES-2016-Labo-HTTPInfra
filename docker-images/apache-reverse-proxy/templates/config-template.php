<?php
	// Retrieve environment variables
	$dynamic_app = getenv("DYNAMIC_APP");
	$static_app = getenv("STATIC_APP");
?>

<VirtualHost *:80>
	ServerName drabble.res.ch
	
	ProxyPass '/api/books/' 'http://<?php print "$dynamic_app";?>/'
	ProxyPassReverse '/api/books/' 'http://<?php print "$dynamic_app";?>/'
	
	ProxyPass '/' 'http://<?php print "$static_app";?>/'
	ProxyPassReverse '/' 'http://<?php print "$static_app";?>/'
</VirtualHost>