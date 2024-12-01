<?php
/**
 * Twenty Twenty-Five functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Five
 * @since Twenty Twenty-Five 1.0
 */

// Adds theme support for post formats.
if ( ! function_exists( 'twentytwentyfive_post_format_setup' ) ) :
	/**
	 * Adds theme support for post formats.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_post_format_setup() {
		add_theme_support( 'post-formats', array( 'aside', 'audio', 'chat', 'gallery', 'image', 'link', 'quote', 'status', 'video' ) );
	}
endif;
add_action( 'after_setup_theme', 'twentytwentyfive_post_format_setup' );

// Enqueues editor-style.css in the editors.
if ( ! function_exists( 'twentytwentyfive_editor_style' ) ) :
	/**
	 * Enqueues editor-style.css in the editors.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_editor_style() {
		add_editor_style( get_parent_theme_file_uri( 'assets/css/editor-style.css' ) );
	}
endif;
add_action( 'after_setup_theme', 'twentytwentyfive_editor_style' );

// Enqueues style.css on the front.
if ( ! function_exists( 'twentytwentyfive_enqueue_styles' ) ) :
	/**
	 * Enqueues style.css on the front.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_enqueue_styles() {
		wp_enqueue_style(
			'twentytwentyfive-style',
			get_parent_theme_file_uri( 'style.css' ),
			array(),
			wp_get_theme()->get( 'Version' )
		);
	}
endif;
add_action( 'wp_enqueue_scripts', 'twentytwentyfive_enqueue_styles' );

// Registers custom block styles.
if ( ! function_exists( 'twentytwentyfive_block_styles' ) ) :
	/**
	 * Registers custom block styles.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_block_styles() {
		register_block_style(
			'core/list',
			array(
				'name'         => 'checkmark-list',
				'label'        => __( 'Checkmark', 'twentytwentyfive' ),
				'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_block_styles' );

// Registers pattern categories.
if ( ! function_exists( 'twentytwentyfive_pattern_categories' ) ) :
	/**
	 * Registers pattern categories.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_pattern_categories() {

		register_block_pattern_category(
			'twentytwentyfive_page',
			array(
				'label'       => __( 'Pages', 'twentytwentyfive' ),
				'description' => __( 'A collection of full page layouts.', 'twentytwentyfive' ),
			)
		);

		register_block_pattern_category(
			'twentytwentyfive_post-format',
			array(
				'label'       => __( 'Post formats', 'twentytwentyfive' ),
				'description' => __( 'A collection of post format patterns.', 'twentytwentyfive' ),
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_pattern_categories' );

// Registers block binding sources.
if ( ! function_exists( 'twentytwentyfive_register_block_bindings' ) ) :
	/**
	 * Registers the post format block binding source.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_register_block_bindings() {
		register_block_bindings_source(
			'twentytwentyfive/format',
			array(
				'label'              => _x( 'Post format name', 'Label for the block binding placeholder in the editor', 'twentytwentyfive' ),
				'get_value_callback' => 'twentytwentyfive_format_binding',
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_register_block_bindings' );

// Registers block binding callback function for the post format name.
if ( ! function_exists( 'twentytwentyfive_format_binding' ) ) :
	/**
	 * Callback function for the post format name block binding source.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return string|void Post format name, or nothing if the format is 'standard'.
	 */
	function twentytwentyfive_format_binding() {
		$post_format_slug = get_post_format();

		if ( $post_format_slug && 'standard' !== $post_format_slug ) {
			return get_post_format_string( $post_format_slug );
		}
	}
endif;

// // Allow CORS for specific REST API endpoints (Posts and Media)
// add_action( 'rest_api_init', function () {
//     remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
//     add_filter( 'rest_pre_serve_request', function ( $value ) {
//         $request_uri = $_SERVER['REQUEST_URI'];

//         // Check if the request is for the posts or media endpoints
//         if (
//             strpos( $request_uri, '/wp-json/wp/v2/posts' ) !== false || 
//             strpos( $request_uri, '/wp-json/wp/v2/media' ) !== false
//         ) {
//             header( 'Access-Control-Allow-Origin: *' ); // Replace * with a specific origin in production
//             header( 'Access-Control-Allow-Methods: GET, OPTIONS' );
//             header( 'Access-Control-Allow-Credentials: true' );
//             header( 'Access-Control-Allow-Headers: Authorization, Content-Type' );
//         }

//         return $value;
//     });
// }, 15 );


// add_action('rest_api_init', 'register_rest_images' );
// function register_rest_images(){
//     register_rest_field( array('post'),
//         'post_featured_image',
//         array(
//             'get_callback'    => 'get_rest_featured_image',
//             'update_callback' => null,
//             'schema'          => null,
//         )
//     );
// }
// function get_rest_featured_image( $object, $field_name, $request ) {
//     if( $object['featured_media'] ){
//         $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
//         return $img[0];
//     }
//     return false;
// }


add_action('rest_api_init', 'register_rest_fields');
function register_rest_fields() {
    // Register the featured image field
    register_rest_field(
        'post',
        'post_featured_image',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );

    // Register the author details field
    register_rest_field(
        'post',
        'author_details',
        array(
            'get_callback'    => 'get_rest_author_details',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

function get_rest_featured_image( $object, $field_name, $request ) {
    if( !empty( $object['featured_media'] ) ) {
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img ? $img[0] : false;
    }
    return false;
}

function get_rest_author_details( $object, $field_name, $request ) {
    $author_id = $object['author'];
    $author_name = get_the_author_meta( 'display_name', $author_id );
    $author_avatar = get_avatar_url( $author_id );

    return array(
        'name' => $author_name,
        'avatar' => $author_avatar,
    );
}
