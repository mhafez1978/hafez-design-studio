<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'captaine_wp664' );

/** Database username */
define( 'DB_USER', 'captaine_wp664' );

/** Database password */
define( 'DB_PASSWORD', '(@1tS04pIc' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ckr7wmxonnzswen8vmxx6lpznz440ujvw1w83kc6zz2vdo41lhvrpkw1jcsw0xef' );
define( 'SECURE_AUTH_KEY',  '3i2a8yjrlgue2tkmvqxmpybw1dfrrji2xix5z402x39sdq5bvsqenn9qztqrxzyc' );
define( 'LOGGED_IN_KEY',    'woms5lhooasm88y1gpsz0f11esd9kv5x13wbv6lckvmplcm2ri9u8mkix7vvtqzv' );
define( 'NONCE_KEY',        'c9qxlcfgvl0tsgmc8xwrane6pyliprexv1lxvxyo65cfjgsvb7jjs6adip9lgsbo' );
define( 'AUTH_SALT',        'a2jdtnnhlt4nygiif5wwbzlbk8gh1xvfjk7hkeugcj7likxy4wyvrgektjdhseth' );
define( 'SECURE_AUTH_SALT', 'mwr6mxselawigyw2pxb9ao2pmcv45h6l1igc8g9eoc3zwyo2tyjwdyzfig5uv7sv' );
define( 'LOGGED_IN_SALT',   'fscxqtdsaom5xkuavxteekhpxdwtzhqqp6nwu3so2xm88lrvbgefnwx2uvqhwalp' );
define( 'NONCE_SALT',       'ukop3yshrxmqenwbyr8yusmo481bhzvebfpclzjiptsm9fgntyzw6qcv087utb4n' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'hdsc_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
