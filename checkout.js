// Кастомизируем страницу оформления заказа
	// Делаем шапку для списка товаров
		$('.co-basket').prepend('<div class="co-basket_header-list"><div class="co-basket_header"><div class="co-basket_header-image_container"></div><div class="co-basket_basket_header-description">Товар</div><div class="co-basket_header-count">Количество</div><div class="co-basket_header-total">Цена</div></div></div>');

	// Выносим количество товара отдельно от цены
		$(".co-basket_item-total").each(function(index) {
			$(this).before('<div class="co-basket_item-count">' + $(this).html() + '</div>'); 
			$('div.co-basket_item-count').html($('div.co-basket_item-count').find('.co-basket_item-count:last').html()); 
			$(this).html($(this).find('.co-basket_item-price'));
		});
		
	// Заголовки
		$('form#order_form').prepend('<div class="js-co-contacts"><div class="co-form-title">Контактные данные</div></div><div class="js-co-delivery"><div class="co-form-title">Способ доставки</div></div><div class="js-co-payment"><div class="co-form-title">Способ оплаты</div></div>');
	
	// Контактные данные
		$('.js-co-contacts').append($('#client_name').parent());
		$('.js-co-contacts').append($('#client_surname').parent());
		$('.js-co-contacts').append($('#client_email').parent());
		$('.js-co-contacts').append($('#client_phone').parent());
		$('[data-target=".co-modal--login"]').hide()
		
	// Доставка
		$('.js-co-delivery').append($('.co-delivery_method-list'));
		$('#delivery_address').find('.co-title').hide();
		$('#delivery_variants').find('.co-title').hide();
		$('#shipping_address').find('.co-title').hide();

		// Вкладки типа доставки
			$('#delivery-type-switch').hide();
			$('#delivery_variants').find('.co-tabs-content').show();
			$('#tabs-need-address').click(function() {
              $('.co-delivery_adress-form').show();
            });
			$('#tabs-pickup').click(function() {
              $('.co-delivery_adress-form').hide();
            });

	// Оплата
		$('.js-co-payment').append('<div class="co-block-bg-1"></div>');
		$('.js-co-payment').find('.co-block-bg-1').append($('#payment_gateways'));
		$('#payment_gateways').find('.co-title').hide();

	// Другие поля
		$('#register').removeAttr("checked");
		$('.co-customer').hide();

		$('form#order_form').append('<div class="endfix"></div>');
		$('#shipping_address').hide();
