<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'aaronjer_localwp');

/** MySQL database username */
define('DB_USER', 'aaronjer_wpuser');

/** MySQL database password */
define('DB_PASSWORD', 'MILl72997Grad5088');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

//data base needs to be told it is going somewhere in a localhost folder
define('WP_HOME', 'http://aaronjeromemiller.com');

//helpful way to change the url while migrating it
define('WP_SITEURL', 'http://aaronjeromemiller.com');



/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'mu4)T!Q,}k[Qe|[jsT5NN@c}$?gm/:bP0sW1 z,?ez{Y 3UFy(Aic/11g[09#uJz');
define('SECURE_AUTH_KEY',  ';SbP9R.S@oGxdk3hGWV#43Jr=y*/VKz7Kl7/AG0RILsD>rIe=dj.psjtR^AA#uyL');
define('LOGGED_IN_KEY',    'ioH=ASS /_CbpJ-VRz 7~PQWHPEV^ Xy!yB7O:XtNQ[r]`A9_b=]PUS0K9;v/7(J');
define('NONCE_KEY',        'Oth^ybUtv=$!!)o7SZOppYp~V!]S|Em)EYKVu=An<bBzA|pPZl]FQ0K+Dv7!GfY*');
define('AUTH_SALT',        '>hcAf:TMC)y.}idak.JDRTMT7K]@4Z%ghd7PGY 6:B,>rNeRJCrH`YB[~hG*^}*3');
define('SECURE_AUTH_SALT', ' ni/-a8Ck3b28~18Pa]RB&}c)hu,&LH}W#F@wNhB(R@Gk0HBSkn1V:W7oo&)q>_G');
define('LOGGED_IN_SALT',   'BnM%vCff!M_-D[jbdH6HD&%qfb )owY1(Tl*R=gE9y?vtQ~/nmhi*8K@%I*g|>!m');
define('NONCE_SALT',       'X?-xIuEH~fv%FAiS4jj`HEC/KpLTYmsQ<_E0^RJMkAfGp[oE#i4QE&rI6^R,YcO{');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wptest_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
