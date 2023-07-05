window.flowboxPromotions = {
 init() {
	 $('.js-flowbox-section').each((index, value) => {
	 const key = $(value).data('key');
	const id = $(value).data('id'); 
	 const locales = $(value).data('locale'); 
	console.log(key);
	console.log(id);
	console.log(locales);
	 window.flowbox('init', {
	 container: id, 
	 key: key, 
	 locale: locales 
	}) 
	 }); 
	}, 
}; 
 window.collectionflowboxPromotions = { 
	 init(){ 
	 $('.collection-flowbox-section').each((index, value) => { 
	const key = $(value).data('key'); 
	 const id = $(value).data('id');  
	const locales = $(value).data('locale'); 
	const tags =$(value).data('tags'); 
	const operator = $(value).data('tagoperator'); 
	 console.log(key); 
	console.log(tags); 
	console.log(operator); 
	window.flowbox('init', { 
	container: id, 
	key: key, 
	locale: locales, 
	tags: [tags],    
	tagsOperator: operator 
	}) 
	}); 
	}, 
}; 
window.productflowboxPromotions = { 
	 init(){ 
	$('.product-flowbox-sections').each((index, value) => { 
	const key = $(value).data('key'); 
	const id = $(value).data('id');  
	const locales = $(value).data('locale'); 
	const product =$(value).data('product');  
	window.flowbox('init', {
	container: id,
	key: key,
	locale: locales, 
	productId: product 
	 }) 
	});
	},
};
window.productCollectionflowboxPromotions = {
	init(){
	$('.product-flowbox-section').each((index, value) => { 
	const key = $(value).data('key');
	const id = $(value).data('id'); 
	const locales = $(value).data('locale'); 
	const tags =$(value).data('tags'); 
	window.flowbox('init', { 
	container: id, 
	key: key, 
	locale: locales, 
	tags: [tags] 
	}) 
	}); 
	}, 
}; 
 window.productFlowboxImage = { 
 init() { 
	 $('.product-flowbox-section').each((index, value) => { 
	 const key = $(value).data('key'); 
	 const variantid = $(value).data('product'); 
	 const length = $(value).data('product-length'); 
	 const name = $(value).data('product-name'); 
	 const like = $(value).data('product-like'); 
	 const psocial = $(value).data('product-social'); 
	 var urlz = 'https://gateway.getflowbox.com/public/feed/' + key + '?productId=' + variantid; 
	 $.ajax({ 
	 type:"GET", 
	 dataType: "json", 
	 url:urlz,  
	 success:function(data) 
	 {  
	 var product_image = ""; 
	 var product_image_modal = ""; 
	 var social = ""; 
	 var data_length = data.posts.length;
	 var heart = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg " fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181 "/></svg>'; 
	 if (data_length >= length) { 
	 for (i = 0; i < length; i++) { 
	 if (psocial == true) { 
	 if (data.posts[i].sourceName == 'facebook') { 
	 social = '<svg xmlns="http://www.w3.org/2000/svg " width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z "/></svg>'; 
	 } else { 
	 social = '<svg xmlns="http://www.w3.org/2000/svg " width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z "/></svg>';
	 }
	 }
	 product_image+= ' <li class="product__media-item grid__item slider__slide" data-media-id="template--14698649125038__main-' + i + '">' + 
	 '<modal-opener class="product__modal-opener product__modal-opener--image no-js-hidden " data-modal="#ProductModal-template--14698649125038__main ">' + 
	 '<button id="ProductThumbnail-3 " class="product__media-toggle" type="button" aria-haspopup="dialog" data-media-id="' + i + '"><span class="product__media-icon motion-reduce product__media-icon--image "><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg ">' +
	 '<path fill-rule="evenodd" clip-rule="evenodd " d="M4.66724 7.93978C4.66655 7.66364 4.88984 7.43922 5.16598 7.43853L10.6996 7.42464C10.9758 7.42395 11.2002 7.64724 11.2009 7.92339C11.2016 8.19953 10.9783 8.42395 10.7021 8.42464L5.16849 8.43852C4.89235 8.43922 4.66793 8.21592 4.66724 7.93978Z " fill="currentColor "></path>' +
	 '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.92576 4.66463C8.2019 4.66394 8.42632 4.88723 8.42702 5.16337L8.4409 10.697C8.44159 10.9732 8.2183 11.1976 7.94215 11.1983C7.66601 11.199 7.44159 10.9757 7.4409 10.6995L7.42702 5.16588C7.42633 4.88974 7.64962 4.66532 7.92576 4.66463Z " fill="currentColor"></path>' +
	 '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8324 3.03011C10.1255 0.323296 5.73693 0.323296 3.03011 3.03011C0.323296 5.73693 0.323296 10.1256 3.03011 12.8324C5.73693 15.5392 10.1255 15.5392 12.8324 12.8324C15.5392 10.1256 15.5392 5.73693 12.8324 3.03011ZM2.32301 2.32301C5.42035 -0.774336 10.4421 -0.774336 13.5395 2.32301C16.6101 5.39361 16.6366 10.3556 13.619 13.4588L18.2473 18.0871C18.4426 18.2824 18.4426 18.599 18.2473 18.7943C18.0521 18.9895 17.7355 18.9895 17.5402 18.7943L12.8778 14.1318C9.76383 16.6223 5.20839 16.4249 2.32301 13.5395C-0.774335 10.4421 -0.774335 5.42035 2.32301 2.32301Z " fill="currentColor"></path>' +
	 '</svg><span class="visually-hidden">Load media in gallery viewer, test product 1</span></span><div class="product__media media " style="padding-top: 75.0%;" tabindex="-1">' +
	 '<img src="' + data.posts[i].thumbnail.url + '" sizes="(min-width: 1200px) calc((1200px - 10rem) / 2), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)" loading="lazy" alt="">'
	  product_image+= '<div class="gallery-details"><div class="gallery-details-info">';  
	 product_image+= '<div class="gallery-left">' + social + ' ' + data.posts[i].userName + '</div>'; 
	 if (like == true) { 
	 product_image+= '<div class="gallery-right">' + heart + ' ' + data.posts[i].likes + '</div>'; 
	 } 
	 product_image+= '</div></div></div></button></modal-opener></li>'; 
	 product_image_modal+= '<img sizes="(min-width: 750px) calc(100vw - 12rem), 100vw" src="' + data.posts[i].imageUrl + '" alt="test product 1" loading="lazy" width="1100" height="825" data-media-id="' + i + '">';
	 }
	 } else { 
	 for (i = 0; i < data_length; i++) { 
	 if (psocial == true) { 
	 if (data.posts[i].sourceName == 'facebook') { 
	 social = '<svg xmlns="http://www.w3.org/2000/svg " width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z "/></svg>'; 
	 }else {
	 social = '<svg xmlns="http://www.w3.org/2000/svg " width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z "/></svg>'; 
	  }
	 }
	 product_image+= ' <li class="product__media-item grid__item slider__slide " data-media-id="template--14698649125038__main-' + i + '">' +
	 '<modal-opener class="product__modal-opener product__modal-opener--image no-js-hidden " data-modal="#ProductModal-template--14698649125038__main ">' +
	 '<button id="ProductThumbnail-3" class="product__media-toggle" type="button" aria-haspopup="dialog" data-media-id="' + i + '"><span class="product__media-icon motion-reduce product__media-icon--image "><svg aria-hidden="true " focusable="false " role="presentation " class="icon icon-plus" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg ">' + 
	 '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66724 7.93978C4.66655 7.66364 4.88984 7.43922 5.16598 7.43853L10.6996 7.42464C10.9758 7.42395 11.2002 7.64724 11.2009 7.92339C11.2016 8.19953 10.9783 8.42395 10.7021 8.42464L5.16849 8.43852C4.89235 8.43922 4.66793 8.21592 4.66724 7.93978Z " fill="currentColor"></path>' + 
	 '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.92576 4.66463C8.2019 4.66394 8.42632 4.88723 8.42702 5.16337L8.4409 10.697C8.44159 10.9732 8.2183 11.1976 7.94215 11.1983C7.66601 11.199 7.44159 10.9757 7.4409 10.6995L7.42702 5.16588C7.42633 4.88974 7.64962 4.66532 7.92576 4.66463Z" fill="currentColor"></path>' + 
	 '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8324 3.03011C10.1255 0.323296 5.73693 0.323296 3.03011 3.03011C0.323296 5.73693 0.323296 10.1256 3.03011 12.8324C5.73693 15.5392 10.1255 15.5392 12.8324 12.8324C15.5392 10.1256 15.5392 5.73693 12.8324 3.03011ZM2.32301 2.32301C5.42035 -0.774336 10.4421 -0.774336 13.5395 2.32301C16.6101 5.39361 16.6366 10.3556 13.619 13.4588L18.2473 18.0871C18.4426 18.2824 18.4426 18.599 18.2473 18.7943C18.0521 18.9895 17.7355 18.9895 17.5402 18.7943L12.8778 14.1318C9.76383 16.6223 5.20839 16.4249 2.32301 13.5395C-0.774335 10.4421 -0.774335 5.42035 2.32301 2.32301Z" fill="currentColor"></path>' + 
	 '</svg><span class="visually-hidden">Load media in gallery viewer, test product 1</span></span><div class="product__media media" style="padding-top: 75.0%;" tabindex="-1">' + 
	 '<img src="' + data.posts[i].thumbnail.url + '" sizes="(min-width: 1200px) calc((1200px - 10rem) / 2), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)" loading="lazy" alt="">' + 
	 ' ';
	 product_image+= '<div class="gallery-details"><div class="gallery-details-info">'; 
	 product_image+= '<div class="gallery-left">' + social + ' ' + data.posts[i].userName + '</div>'; 
	 if (like == true) { 
	 product_image+= '<div class="gallery-right">' + heart + ' ' + data.posts[i].likes + '</div>'; 
	 } 
	 product_image+= '</div></div></div></button></modal-opener></li>'; 
	 product_image_modal+= '<img sizes="(min-width: 750px) calc(100vw - 12rem), 100vw" src="' + data.posts[i].imageUrl + '" alt="test product 1" loading="lazy" width="1100" height="825" data-media-id="' + i + '">'; 
	 } 
	 } 
	 $('.product__media-list').append(product_image); 
	 $('.product-media-modal__content').append(product_image_modal); 
	 } 
	 }); 
	 }); 
	 }, 
 };
 $(() => { 
window.flowboxPromotions.init(); 
	window.collectionflowboxPromotions.init(); 
	window.productflowboxPromotions.init(); 
window.productCollectionflowboxPromotions.init();
 window.productFlowboxImage.init(); 
 $('.slider-mobile-gutter .slider-button').removeAttr("disabled");

 }); 
$(document) 
.on('shopify:section:load', function(e){
	 var $parentSection = $('#shopify-section-' + e.detail.sectionId);
	if ($parentSection.hasClass('flowbox-section')) {
	 window.flowboxPromotions.init();
	 }
	 if ($parentSection.hasClass('collectionflowbox-section')) {
	 window.collectionflowboxPromotions.init();
	 }
	 if ($parentSection.hasClass('productFlowbox-section')) {
	 window.productflowboxPromotions.init();
	 window.productCollectionflowboxPromotions.init();
	 window.productFlowboxImage.init(); 
	}
});
 