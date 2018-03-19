$(document).ready(function() {

    function product(id, brand, model, description, price) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.description = description;
        this.price = price;
        this.showDescription = function() {
            var info = "";
            info += '<div class="info">';
            info += '<h3 class="brand">' + 'Brand name: ' + this.brand + '</h3>';
            info += '<h4 class="full-name">' + 'Model: ' + this.model + '</h4>';
            info += '<h5 class="item-id">' + 'ID: ' + this.id + '</h5>';
            info += '<p class="short-description">' + 'Short description: ' + this.description + '</p>';
            info += '<h4 class="price">Price ' + this.price + '</h4>';
            info += '<button class="' + this.id + ' add-to-cart">ADD TO CART <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>';
            info += '<button class="close"><i class="fa fa-times" aria-hidden="true"></i></button>';
            info += '</div>';
            $(info).appendTo(".description-box");
        };
    }

    var product1 = new product("A001", "Hublot", 'Silver',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "299 $");

    var product2 = new product("A002", "Eddox", 'Silver',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "199 $");

    var product3 = new product("A003", "Samsung", 'Watch S2',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "99 $");

    var product4 = new product("A004", "Eddox", 'Chronorally Chronograph',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "299 $");

    var product5 = new product("A005", "Cartier", 'Pearl White Gold Plated',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "299 $");

    var product6 = new product("A006", "Cartier", 'Diamond White Gold Plated',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "399 $");

    var product7 = new product("A007", "Cartier", 'Diamond White Gold Plated',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "449 $");

    var product8 = new product("A008", "Cartier", 'Black Diamond',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "699 $");

    var product9 = new product("A009", "Rolex", 'Blue Submariner',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "599 $");

    var product10 = new product("A010", "Rolex", 'Oyster Perpetual',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "699 $");

    var product11 = new product("A011", "HUBLOT", 'Big Bang Unico GMT',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "349 $");

    var product12 = new product("A012", "TISSOT", 'POWERMATIC 80',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "599 $");

    var product13 = new product("A013", "PAUL HEWITT", 'Sailor Line',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "299 $");

    var product14 = new product("A014", "JBW", 'Lumen',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "399 $");

    var product15 = new product("A015", "JBW", 'Helena',
        "Proin porta dui a consectetur vulputate. Nulla semper commodo eleifend.",
        "349 $");

    var product16 = new product("A016", "CARTIER", 'TANK ANGLAISE MEDIUM',
        "Manufacture mechanical movement with automatic winding caliber 1904 MC.",
        "599 $");


    $(".view").click(function() {
        $(".description-box").empty();
        $(".body-blur").show();
        $(".description-box").show("easing");
        switch ($(this).attr("id")) {
            case 'A001':
                $(".description-box").text(product1.showDescription());
                break;
            case 'A002':
                $(".description-box").text(product2.showDescription());
                break;
            case 'A003':
                $(".description-box").text(product3.showDescription());
                break;
            case 'A004':
                $(".description-box").text(product4.showDescription());
                break;
            case 'A005':
                $(".description-box").text(product5.showDescription());
                break;
            case 'A006':
                $(".description-box").text(product6.showDescription());
                break;
            case 'A007':
                $(".description-box").text(product7.showDescription());
                break;
            case 'A008':
                $(".description-box").text(product8.showDescription());
                break;
            case 'A009':
                $(".description-box").text(product9.showDescription());
                break;
            case 'A010':
                $(".description-box").text(product10.showDescription());
                break;
            case 'A011':
                $(".description-box").text(product11.showDescription());
                break;
            case 'A012':
                $(".description-box").text(product12.showDescription());
                break;
            case 'A013':
                $(".description-box").text(product13.showDescription());
                break;
            case 'A014':
                $(".description-box").text(product14.showDescription());
                break;
            case 'A015':
                $(".description-box").text(product15.showDescription());
                break;
            case 'A016':
                $(".description-box").text(product16.showDescription());
                break;
            default:
                $(".description-box").text('not found');
        }
    });

let showNotification = () => {
notificationBox.delay(300).fadeIn("easing").delay(2500).fadeOut("easing");
$(".body-blur").delay(900).show().delay(3000).fadeOut();
}
    // hide description when clicking outside the description box
    $(".body-blur").click(function() {
        $(this).hide();
        $(".description-box, .notification").hide("easing");
    });

    $("body").on("click", ".close", function() {
        $(".description-box, .body-blur").fadeOut("easing");
    });

//add to cart function
let shoppingCart = [];
let notificationBox = $('.notification');


    $('body').on('click', ".add-to-cart, .remove-from-cart", function(){
    	let product = $(this).attr('class').substring(0,4); //keeping only the class that shows the product ID (eg: A001)
    	let itemtoRemove = product;

        const addIcon = '<i class="fa fa-shopping-cart" aria-hidden="true"></i>';

        if ($(this).html() == 'REMOVE FROM CART ') {
        	//remove product from cart
            $(this).html('ADD TO CART ' + addIcon);
            shoppingCart.splice($.inArray(product, shoppingCart),1); //removes only the matched item in an array

			$('.products h5:last-child').remove();
			notificationBox.html(product + ' removed from  cart. ' + 'You have ' + shoppingCart.length + ' products left in your cart.');

			showNotification();
			console.log("");
        	console.log(product + ' removed from  cart. ' + 'You have ' + shoppingCart.length + ' products in your cart.');
        	console.log(shoppingCart);

        } else {
        	//add product to cart 
        	shoppingCart.push(product);
        	$('.products').append('<h5>' + product + '</h5>');
        	notificationBox.html(product + ' added to cart. ' + 'You have ' + shoppingCart.length + ' products in your cart.');
        	showNotification();

        	console.log("");
        	console.log(product + ' added to cart. ' + 'The shopping cart length is ' + shoppingCart.length);
        	console.log(shoppingCart);
            $(this).html('REMOVE FROM CART ');
        }
        $(this).toggleClass('add-to-cart');
        $(this).toggleClass('remove-from-cart');

     //shopping cart 
	$('.modal-body .productsNumber').text('You have ' + shoppingCart.length + ' products in your shopping cart.');
    });


    // Add slideDown animation to Bootstrap menu dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    // Add slideUp animation to Bootstrap menu dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
    // When the user clicks on the button, scroll to the top of the document
    $('#goToTopBtn').each(function() {
        $(this).click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 'slow');
            return false;
        });
        // Slow scrolling when clicking <a> menu links but not the slider controls & when hovering watches 
        $("a").not('.carousel-control').not('.view').on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });
    });
    // When the user scrolls down, #myBtn shows
    window.onscroll = function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $("#goToTopBtn").show();
        } else {
            $("#goToTopBtn").hide();
        }
    };
    // Centers .description-box or any element with .center();
    // jQuery.fn.center = function() {
    //     this.css("position", "absolute");
    //     this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    //     this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    //     return this;
    // }

});