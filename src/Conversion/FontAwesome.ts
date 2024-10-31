const MAP = new Map<string, string>([
    ['500px', 'fab fa-500px'],
    ['address-book-o', 'far fa-address-book'],
    ['address-book', 'fas fa-address-book'],
    ['address-card-o', 'far fa-address-card'],
    ['address-card', 'fas fa-address-card'],
    ['adjust', 'fas fa-adjust'],
    ['adn', 'fab fa-adn'],
    ['align-center', 'fas fa-align-center'],
    ['align-justify', 'fas fa-align-justify'],
    ['align-left', 'fas fa-align-left'],
    ['align-right', 'fas fa-align-right'],
    ['amazon', 'fab fa-amazon'],
    ['ambulance', 'fas fa-ambulance'],
    ['american-sign-language-interpreting', 'fas fa-american-sign-language-interpreting'],
    ['anchor', 'fas fa-anchor'],
    ['android', 'fab fa-android'],
    ['angellist', 'fab fa-angellist'],
    ['angle-double-down', 'fas fa-angle-double-down'],
    ['angle-double-left', 'fas fa-angle-double-left'],
    ['angle-double-right', 'fas fa-angle-double-right'],
    ['angle-double-up', 'fas fa-angle-double-up'],
    ['angle-down', 'fas fa-angle-down'],
    ['angle-left', 'fas fa-angle-left'],
    ['angle-right', 'fas fa-angle-right'],
    ['angle-up', 'fas fa-angle-up'],
    ['apple', 'fab fa-apple'],
    ['archive', 'fas fa-archive'],
    ['area-chart', 'fa fa-chart-area'],
    ['arrow-circle-down', 'fas fa-arrow-circle-down'],
    ['arrow-circle-left', 'fas fa-arrow-circle-left'],
    ['arrow-circle-o-down', 'far fa-arrow-alt-circle-down'],
    ['arrow-circle-o-left', 'far fa-arrow-alt-circle-left'],
    ['arrow-circle-o-right', 'far fa-arrow-alt-circle-right'],
    ['arrow-circle-o-up', 'far fa-arrow-alt-circle-up'],
    ['arrow-circle-right', 'fas fa-arrow-circle-right'],
    ['arrow-circle-up', 'fas fa-arrow-circle-up'],
    ['arrow-down', 'fas fa-arrow-down'],
    ['arrow-left', 'fas fa-arrow-left'],
    ['arrow-right', 'fas fa-arrow-right'],
    ['arrow-up', 'fas fa-arrow-up'],
    ['arrows-alt', 'fa fa-expand-arrows-alt'],
    ['arrows-h', 'fa fa-arrows-alt-h'],
    ['arrows-v', 'fa fa-arrows-alt-v'],
    ['arrows', 'fa fa-arrows-alt'],
    ['asl-interpreting', 'fa fa-american-sign-language-interpreting'],
    ['assistive-listening-systems', 'fas fa-assistive-listening-systems'],
    ['asterisk', 'fas fa-asterisk'],
    ['at', 'fas fa-at'],
    ['audio-description', 'fas fa-audio-description'],
    ['automobile', 'fa fa-car'],
    ['backward', 'fas fa-backward'],
    ['balance-scale', 'fas fa-balance-scale'],
    ['ban', 'fas fa-ban'],
    ['bandcamp', 'fab fa-bandcamp'],
    ['bank', 'fa fa-university'],
    ['bar-chart-o', 'far fa-chart-bar'],
    ['bar-chart', 'far fa-chart-bar'],
    ['barcode', 'fas fa-barcode'],
    ['bars', 'fas fa-bars'],
    ['bath', 'fas fa-bath'],
    ['bathtub', 'fa fa-bath'],
    ['battery-0', 'fa fa-battery-empty'],
    ['battery-1', 'fa fa-battery-quarter'],
    ['battery-2', 'fa fa-battery-half'],
    ['battery-3', 'fa fa-battery-three-quarters'],
    ['battery-4', 'fa fa-battery-full'],
    ['battery-empty', 'fas fa-battery-empty'],
    ['battery-full', 'fas fa-battery-full'],
    ['battery-half', 'fas fa-battery-half'],
    ['battery-quarter', 'fas fa-battery-quarter'],
    ['battery-three-quarters', 'fas fa-battery-three-quarters'],
    ['battery', 'fa fa-battery-full'],
    ['bed', 'fas fa-bed'],
    ['beer', 'fas fa-beer'],
    ['behance-square', 'fab fa-behance-square'],
    ['behance', 'fab fa-behance'],
    ['bell-o', 'far fa-bell'],
    ['bell-slash-o', 'far fa-bell-slash'],
    ['bell-slash', 'fas fa-bell-slash'],
    ['bell', 'fas fa-bell'],
    ['bicycle', 'fas fa-bicycle'],
    ['binoculars', 'fas fa-binoculars'],
    ['birthday-cake', 'fas fa-birthday-cake'],
    ['bitbucket-square', 'fab fa-bitbucket'],
    ['bitbucket', 'fab fa-bitbucket'],
    ['bitcoin', 'fab fa-btc'],
    ['black-tie', 'fab fa-black-tie'],
    ['blind', 'fas fa-blind'],
    ['bluetooth-b', 'fab fa-bluetooth-b'],
    ['bluetooth', 'fab fa-bluetooth'],
    ['bold', 'fas fa-bold'],
    ['bolt', 'fas fa-bolt'],
    ['bomb', 'fas fa-bomb'],
    ['book', 'fas fa-book'],
    ['bookmark-o', 'far fa-bookmark'],
    ['bookmark', 'fas fa-bookmark'],
    ['braille', 'fas fa-braille'],
    ['briefcase', 'fas fa-briefcase'],
    ['btc', 'fab fa-btc'],
    ['bug', 'fas fa-bug'],
    ['building-o', 'far fa-building'],
    ['building', 'fas fa-building'],
    ['bullhorn', 'fas fa-bullhorn'],
    ['bullseye', 'fas fa-bullseye'],
    ['bus', 'fas fa-bus'],
    ['buysellads', 'fab fa-buysellads'],
    ['cab', 'fa fa-taxi'],
    ['calculator', 'fas fa-calculator'],
    ['calendar-check-o', 'far fa-calendar-check'],
    ['calendar-minus-o', 'far fa-calendar-minus'],
    ['calendar-o', 'far fa-calendar'],
    ['calendar-plus-o', 'far fa-calendar-plus'],
    ['calendar-times-o', 'far fa-calendar-times'],
    ['calendar', 'fa fa-calendar-alt'],
    ['camera-retro', 'fas fa-camera-retro'],
    ['camera', 'fas fa-camera'],
    ['car', 'fas fa-car'],
    ['caret-down', 'fas fa-caret-down'],
    ['caret-left', 'fas fa-caret-left'],
    ['caret-right', 'fas fa-caret-right'],
    ['caret-square-o-down', 'far fa-caret-square-down'],
    ['caret-square-o-left', 'far fa-caret-square-left'],
    ['caret-square-o-right', 'far fa-caret-square-right'],
    ['caret-square-o-up', 'far fa-caret-square-up'],
    ['caret-up', 'fas fa-caret-up'],
    ['cart-arrow-down', 'fas fa-cart-arrow-down'],
    ['cart-plus', 'fas fa-cart-plus'],
    ['cc-amex', 'fab fa-cc-amex'],
    ['cc-diners-club', 'fab fa-cc-diners-club'],
    ['cc-discover', 'fab fa-cc-discover'],
    ['cc-jcb', 'fab fa-cc-jcb'],
    ['cc-mastercard', 'fab fa-cc-mastercard'],
    ['cc-paypal', 'fab fa-cc-paypal'],
    ['cc-stripe', 'fab fa-cc-stripe'],
    ['cc-visa', 'fab fa-cc-visa'],
    ['cc', 'far fa-closed-captioning'],
    ['certificate', 'fas fa-certificate'],
    ['chain-broken', 'fa fa-unlink'],
    ['chain', 'fa fa-link'],
    ['check-circle-o', 'far fa-check-circle'],
    ['check-circle', 'fas fa-check-circle'],
    ['check-square-o', 'far fa-check-square'],
    ['check-square', 'fas fa-check-square'],
    ['check', 'fas fa-check'],
    ['chevron-circle-down', 'fas fa-chevron-circle-down'],
    ['chevron-circle-left', 'fas fa-chevron-circle-left'],
    ['chevron-circle-right', 'fas fa-chevron-circle-right'],
    ['chevron-circle-up', 'fas fa-chevron-circle-up'],
    ['chevron-down', 'fas fa-chevron-down'],
    ['chevron-left', 'fas fa-chevron-left'],
    ['chevron-right', 'fas fa-chevron-right'],
    ['chevron-up', 'fas fa-chevron-up'],
    ['child', 'fas fa-child'],
    ['chrome', 'fab fa-chrome'],
    ['circle-o-notch', 'fa fa-circle-notch'],
    ['circle-o', 'far fa-circle'],
    ['circle-thin', 'far fa-circle'],
    ['circle', 'fas fa-circle'],
    ['clipboard', 'far fa-clipboard'],
    ['clock-o', 'far fa-clock'],
    ['clone', 'far fa-clone'],
    ['close', 'fa fa-times'],
    ['cloud-download', 'fa fa-cloud-download-alt'],
    ['cloud-upload', 'fa fa-cloud-upload-alt'],
    ['cloud', 'fas fa-cloud'],
    ['cny', 'fa fa-yen-sign'],
    ['code-fork', 'fa fa-code-branch'],
    ['code', 'fas fa-code'],
    ['codepen', 'fab fa-codepen'],
    ['codiepie', 'fab fa-codiepie'],
    ['coffee', 'fas fa-coffee'],
    ['cog', 'fas fa-cog'],
    ['cogs', 'fas fa-cogs'],
    ['columns', 'fas fa-columns'],
    ['comment-o', 'far fa-comment'],
    ['comment', 'fas fa-comment'],
    ['commenting-o', 'far fa-comment-dots'],
    ['commenting', 'fa fa-comment-dots'],
    ['comments-o', 'far fa-comments'],
    ['comments', 'fas fa-comments'],
    ['compass', 'far fa-compass'],
    ['compress', 'fa fa-compress-alt'],
    ['connectdevelop', 'fab fa-connectdevelop'],
    ['contao', 'fab fa-contao'],
    ['copy', 'fas fa-copy'],
    ['copyright', 'far fa-copyright'],
    ['creative-commons', 'fab fa-creative-commons'],
    ['credit-card-alt', 'fa fa-credit-card'],
    ['credit-card', 'far fa-credit-card'],
    ['crop', 'fas fa-crop'],
    ['crosshairs', 'fas fa-crosshairs'],
    ['css3', 'fab fa-css3'],
    ['cube', 'fas fa-cube'],
    ['cubes', 'fas fa-cubes'],
    ['cut', 'fas fa-cut'],
    ['cutlery', 'fa fa-utensils'],
    ['dashboard', 'fa fa-tachometer-alt'],
    ['dashcube', 'fab fa-dashcube'],
    ['database', 'fas fa-database'],
    ['deaf', 'fas fa-deaf'],
    ['deafness', 'fa fa-deaf'],
    ['dedent', 'fa fa-outdent'],
    ['delicious', 'fab fa-delicious'],
    ['desktop', 'fas fa-desktop'],
    ['deviantart', 'fab fa-deviantart'],
    ['diamond', 'far fa-gem'],
    ['digg', 'fab fa-digg'],
    ['dollar', 'fa fa-dollar-sign'],
    ['dot-circle-o', 'far fa-dot-circle'],
    ['download', 'fas fa-download'],
    ['dribbble', 'fab fa-dribbble'],
    ['drivers-license-o', 'far fa-id-card'],
    ['drivers-license', 'fa fa-id-card'],
    ['dropbox', 'fab fa-dropbox'],
    ['drupal', 'fab fa-drupal'],
    ['edge', 'fab fa-edge'],
    ['edit', 'fas fa-edit'],
    ['eercast', 'fab fa-sellcast'],
    ['eject', 'fas fa-eject'],
    ['ellipsis-h', 'fas fa-ellipsis-h'],
    ['ellipsis-v', 'fas fa-ellipsis-v'],
    ['empire', 'fab fa-empire'],
    ['envelope-o', 'far fa-envelope'],
    ['envelope-open-o', 'far fa-envelope-open'],
    ['envelope-open', 'fas fa-envelope-open'],
    ['envelope-square', 'fas fa-envelope-square'],
    ['envelope', 'fas fa-envelope'],
    ['envira', 'fab fa-envira'],
    ['eraser', 'fas fa-eraser'],
    ['etsy', 'fab fa-etsy'],
    ['eur', 'fa fa-euro-sign'],
    ['euro', 'fa fa-euro-sign'],
    ['exchange', 'fa fa-exchange-alt'],
    ['exclamation-circle', 'fas fa-exclamation-circle'],
    ['exclamation-triangle', 'fas fa-exclamation-triangle'],
    ['exclamation', 'fas fa-exclamation'],
    ['expand', 'fa fa-expand-alt'],
    ['expeditedssl', 'fab fa-expeditedssl'],
    ['external-link-square', 'fa fa-external-link-square-alt'],
    ['external-link', 'fa fa-external-link-alt'],
    ['eye-slash', 'far fa-eye-slash'],
    ['eye', 'far fa-eye'],
    ['eyedropper', 'fa fa-eye-dropper'],
    ['fa', 'fab fa-font-awesome'],
    ['facebook-f', 'fab fa-facebook-f'],
    ['facebook-official', 'fab fa-facebook'],
    ['facebook-square', 'fab fa-facebook-square'],
    ['facebook', 'fab fa-facebook-f'],
    ['fast-backward', 'fas fa-fast-backward'],
    ['fast-forward', 'fas fa-fast-forward'],
    ['fax', 'fas fa-fax'],
    ['feed', 'fa fa-rss'],
    ['female', 'fas fa-female'],
    ['fighter-jet', 'fas fa-fighter-jet'],
    ['file-archive-o', 'far fa-file-archive'],
    ['file-audio-o', 'far fa-file-audio'],
    ['file-code-o', 'far fa-file-code'],
    ['file-excel-o', 'far fa-file-excel'],
    ['file-image-o', 'far fa-file-image'],
    ['file-movie-o', 'far fa-file-video'],
    ['file-o', 'far fa-file'],
    ['file-pdf-o', 'far fa-file-pdf'],
    ['file-photo-o', 'far fa-file-image'],
    ['file-picture-o', 'far fa-file-image'],
    ['file-powerpoint-o', 'far fa-file-powerpoint'],
    ['file-sound-o', 'far fa-file-audio'],
    ['file-text-o', 'far fa-file-alt'],
    ['file-text', 'fa fa-file-alt'],
    ['file-video-o', 'far fa-file-video'],
    ['file-word-o', 'far fa-file-word'],
    ['file-zip-o', 'far fa-file-archive'],
    ['file', 'fas fa-file'],
    ['files-o', 'far fa-copy'],
    ['film', 'fas fa-film'],
    ['filter', 'fas fa-filter'],
    ['fire-extinguisher', 'fas fa-fire-extinguisher'],
    ['fire', 'fas fa-fire'],
    ['firefox', 'fab fa-firefox'],
    ['first-order', 'fab fa-first-order'],
    ['flag-checkered', 'fas fa-flag-checkered'],
    ['flag-o', 'far fa-flag'],
    ['flag', 'fas fa-flag'],
    ['flash', 'fa fa-bolt'],
    ['flask', 'fas fa-flask'],
    ['flickr', 'fab fa-flickr'],
    ['floppy-o', 'far fa-save'],
    ['folder-o', 'far fa-folder'],
    ['folder-open-o', 'far fa-folder-open'],
    ['folder-open', 'fas fa-folder-open'],
    ['folder', 'fas fa-folder'],
    ['font-awesome', 'fab fa-font-awesome'],
    ['font', 'fas fa-font'],
    ['fonticons', 'fab fa-fonticons'],
    ['fort-awesome', 'fab fa-fort-awesome'],
    ['forumbee', 'fab fa-forumbee'],
    ['forward', 'fas fa-forward'],
    ['foursquare', 'fab fa-foursquare'],
    ['free-code-camp', 'fab fa-free-code-camp'],
    ['frown-o', 'far fa-frown'],
    ['futbol-o', 'far fa-futbol'],
    ['gamepad', 'fas fa-gamepad'],
    ['gavel', 'fas fa-gavel'],
    ['gbp', 'fa fa-pound-sign'],
    ['ge', 'fab fa-empire'],
    ['gear', 'fa fa-cog'],
    ['gears', 'fa fa-cogs'],
    ['genderless', 'fas fa-genderless'],
    ['get-pocket', 'fab fa-get-pocket'],
    ['gg-circle', 'fab fa-gg-circle'],
    ['gg', 'fab fa-gg'],
    ['gift', 'fas fa-gift'],
    ['git-square', 'fab fa-git-square'],
    ['git', 'fab fa-git'],
    ['github-alt', 'fab fa-github-alt'],
    ['github-square', 'fab fa-github-square'],
    ['github', 'fab fa-github'],
    ['gitlab', 'fab fa-gitlab'],
    ['gittip', 'fab fa-gratipay'],
    ['glass', 'fa fa-glass-martini'],
    ['glide-g', 'fab fa-glide-g'],
    ['glide', 'fab fa-glide'],
    ['globe', 'fas fa-globe'],
    ['google-plus-circle', 'fab fa-google-plus'],
    ['google-plus-official', 'fab fa-google-plus'],
    ['google-plus-square', 'fab fa-google-plus-square'],
    ['google-plus', 'fab fa-google-plus-g'],
    ['google-wallet', 'fab fa-google-wallet'],
    ['google', 'fab fa-google'],
    ['graduation-cap', 'fas fa-graduation-cap'],
    ['gratipay', 'fab fa-gratipay'],
    ['grav', 'fab fa-grav'],
    ['group', 'fa fa-users'],
    ['h-square', 'fas fa-h-square'],
    ['hacker-news', 'fab fa-hacker-news'],
    ['hand-grab-o', 'far fa-hand-rock'],
    ['hand-lizard-o', 'far fa-hand-lizard'],
    ['hand-o-down', 'far fa-hand-point-down'],
    ['hand-o-left', 'far fa-hand-point-left'],
    ['hand-o-right', 'far fa-hand-point-right'],
    ['hand-o-up', 'far fa-hand-point-up'],
    ['hand-paper-o', 'far fa-hand-paper'],
    ['hand-peace-o', 'far fa-hand-peace'],
    ['hand-pointer-o', 'far fa-hand-pointer'],
    ['hand-rock-o', 'far fa-hand-rock'],
    ['hand-scissors-o', 'far fa-hand-scissors'],
    ['hand-spock-o', 'far fa-hand-spock'],
    ['hand-stop-o', 'far fa-hand-paper'],
    ['handshake-o', 'far fa-handshake'],
    ['hard-of-hearing', 'fa fa-deaf'],
    ['hashtag', 'fas fa-hashtag'],
    ['hdd-o', 'far fa-hdd'],
    ['header', 'fa fa-heading'],
    ['headphones', 'fas fa-headphones'],
    ['heart-o', 'far fa-heart'],
    ['heart', 'fas fa-heart'],
    ['heartbeat', 'fas fa-heartbeat'],
    ['history', 'fas fa-history'],
    ['home', 'fas fa-home'],
    ['hospital-o', 'far fa-hospital'],
    ['hotel', 'fa fa-bed'],
    ['hourglass-1', 'fa fa-hourglass-start'],
    ['hourglass-2', 'fa fa-hourglass-half'],
    ['hourglass-3', 'fa fa-hourglass-end'],
    ['hourglass-end', 'fas fa-hourglass-end'],
    ['hourglass-half', 'fas fa-hourglass-half'],
    ['hourglass-o', 'far fa-hourglass'],
    ['hourglass-start', 'fas fa-hourglass-start'],
    ['hourglass', 'fas fa-hourglass'],
    ['houzz', 'fab fa-houzz'],
    ['html5', 'fab fa-html5'],
    ['i-cursor', 'fas fa-i-cursor'],
    ['id-badge', 'far fa-id-badge'],
    ['id-card-o', 'far fa-id-card'],
    ['id-card', 'fas fa-id-card'],
    ['ils', 'fa fa-shekel-sign'],
    ['image', 'far fa-image'],
    ['imdb', 'fab fa-imdb'],
    ['inbox', 'fas fa-inbox'],
    ['indent', 'fas fa-indent'],
    ['industry', 'fas fa-industry'],
    ['info-circle', 'fas fa-info-circle'],
    ['info', 'fas fa-info'],
    ['inr', 'fa fa-rupee-sign'],
    ['instagram', 'fab fa-instagram'],
    ['institution', 'fa fa-university'],
    ['internet-explorer', 'fab fa-internet-explorer'],
    ['intersex', 'fa fa-transgender'],
    ['ioxhost', 'fab fa-ioxhost'],
    ['italic', 'fas fa-italic'],
    ['joomla', 'fab fa-joomla'],
    ['jpy', 'fa fa-yen-sign'],
    ['jsfiddle', 'fab fa-jsfiddle'],
    ['key', 'fas fa-key'],
    ['keyboard-o', 'far fa-keyboard'],
    ['krw', 'fa fa-won-sign'],
    ['language', 'fas fa-language'],
    ['laptop', 'fas fa-laptop'],
    ['lastfm-square', 'fab fa-lastfm-square'],
    ['lastfm', 'fab fa-lastfm'],
    ['leaf', 'fas fa-leaf'],
    ['leanpub', 'fab fa-leanpub'],
    ['legal', 'fa fa-gavel'],
    ['lemon-o', 'far fa-lemon'],
    ['level-down', 'fa fa-level-down-alt'],
    ['level-up', 'fa fa-level-up-alt'],
    ['life-bouy', 'far fa-life-ring'],
    ['life-buoy', 'far fa-life-ring'],
    ['life-ring', 'far fa-life-ring'],
    ['life-saver', 'far fa-life-ring'],
    ['lightbulb-o', 'far fa-lightbulb'],
    ['line-chart', 'fa fa-chart-line'],
    ['link', 'fas fa-link'],
    ['linkedin-square', 'fab fa-linkedin'],
    ['linkedin', 'fab fa-linkedin-in'],
    ['linode', 'fab fa-linode'],
    ['linux', 'fab fa-linux'],
    ['list-alt', 'far fa-list-alt'],
    ['list-ol', 'fas fa-list-ol'],
    ['list-ul', 'fas fa-list-ul'],
    ['list', 'fas fa-list'],
    ['location-arrow', 'fas fa-location-arrow'],
    ['lock', 'fas fa-lock'],
    ['long-arrow-down', 'fa fa-long-arrow-alt-down'],
    ['long-arrow-left', 'fa fa-long-arrow-alt-left'],
    ['long-arrow-right', 'fa fa-long-arrow-alt-right'],
    ['long-arrow-up', 'fa fa-long-arrow-alt-up'],
    ['low-vision', 'fas fa-low-vision'],
    ['magic', 'fas fa-magic'],
    ['magnet', 'fas fa-magnet'],
    ['mail-forward', 'fa fa-share'],
    ['mail-reply-all', 'fa fa-reply-all'],
    ['mail-reply', 'fa fa-reply'],
    ['male', 'fas fa-male'],
    ['map-marker', 'fa fa-map-marker-alt'],
    ['map-o', 'far fa-map'],
    ['map-pin', 'fas fa-map-pin'],
    ['map-signs', 'fas fa-map-signs'],
    ['map', 'fas fa-map'],
    ['mars-double', 'fas fa-mars-double'],
    ['mars-stroke-h', 'fas fa-mars-stroke-h'],
    ['mars-stroke-v', 'fas fa-mars-stroke-v'],
    ['mars-stroke', 'fas fa-mars-stroke'],
    ['mars', 'fas fa-mars'],
    ['maxcdn', 'fab fa-maxcdn'],
    ['meanpath', 'fab fa-font-awesome'],
    ['medium', 'fab fa-medium'],
    ['medkit', 'fas fa-medkit'],
    ['meetup', 'fab fa-meetup'],
    ['meh-o', 'far fa-meh'],
    ['mercury', 'fas fa-mercury'],
    ['microchip', 'fas fa-microchip'],
    ['microphone-slash', 'fas fa-microphone-slash'],
    ['microphone', 'fas fa-microphone'],
    ['minus-circle', 'fas fa-minus-circle'],
    ['minus-square-o', 'far fa-minus-square'],
    ['minus-square', 'fas fa-minus-square'],
    ['minus', 'fas fa-minus'],
    ['mixcloud', 'fab fa-mixcloud'],
    ['mobile-phone', 'fa fa-mobile-alt'],
    ['mobile', 'fa fa-mobile-alt'],
    ['modx', 'fab fa-modx'],
    ['money', 'far fa-money-bill-alt'],
    ['moon-o', 'far fa-moon'],
    ['mortar-board', 'fa fa-graduation-cap'],
    ['motorcycle', 'fas fa-motorcycle'],
    ['mouse-pointer', 'fas fa-mouse-pointer'],
    ['music', 'fas fa-music'],
    ['navicon', 'fa fa-bars'],
    ['neuter', 'fas fa-neuter'],
    ['newspaper-o', 'far fa-newspaper'],
    ['object-group', 'far fa-object-group'],
    ['object-ungroup', 'far fa-object-ungroup'],
    ['odnoklassniki-square', 'fab fa-odnoklassniki-square'],
    ['odnoklassniki', 'fab fa-odnoklassniki'],
    ['opencart', 'fab fa-opencart'],
    ['openid', 'fab fa-openid'],
    ['opera', 'fab fa-opera'],
    ['optin-monster', 'fab fa-optin-monster'],
    ['outdent', 'fas fa-outdent'],
    ['pagelines', 'fab fa-pagelines'],
    ['paint-brush', 'fas fa-paint-brush'],
    ['paper-plane-o', 'far fa-paper-plane'],
    ['paper-plane', 'fas fa-paper-plane'],
    ['paperclip', 'fas fa-paperclip'],
    ['paragraph', 'fas fa-paragraph'],
    ['paste', 'far fa-clipboard'],
    ['pause-circle-o', 'far fa-pause-circle'],
    ['pause-circle', 'fas fa-pause-circle'],
    ['pause', 'fas fa-pause'],
    ['paw', 'fas fa-paw'],
    ['paypal', 'fab fa-paypal'],
    ['pencil-square-o', 'far fa-edit'],
    ['pencil-square', 'fa fa-pen-square'],
    ['pencil', 'fa fa-pencil-alt'],
    ['percent', 'fas fa-percent'],
    ['phone-square', 'fas fa-phone-square'],
    ['phone', 'fas fa-phone'],
    ['photo', 'far fa-image'],
    ['picture-o', 'far fa-image'],
    ['pie-chart', 'fa fa-chart-pie'],
    ['pied-piper-alt', 'fab fa-pied-piper-alt'],
    ['pied-piper-pp', 'fab fa-pied-piper-pp'],
    ['pied-piper', 'fab fa-pied-piper'],
    ['pinterest-p', 'fab fa-pinterest-p'],
    ['pinterest-square', 'fab fa-pinterest-square'],
    ['pinterest', 'fab fa-pinterest'],
    ['plane', 'fas fa-plane'],
    ['play-circle-o', 'far fa-play-circle'],
    ['play-circle', 'fas fa-play-circle'],
    ['play', 'fas fa-play'],
    ['plug', 'fas fa-plug'],
    ['plus-circle', 'fas fa-plus-circle'],
    ['plus-square-o', 'far fa-plus-square'],
    ['plus-square', 'fas fa-plus-square'],
    ['plus', 'fas fa-plus'],
    ['podcast', 'fas fa-podcast'],
    ['power-off', 'fas fa-power-off'],
    ['print', 'fas fa-print'],
    ['product-hunt', 'fab fa-product-hunt'],
    ['puzzle-piece', 'fas fa-puzzle-piece'],
    ['qq', 'fab fa-qq'],
    ['qrcode', 'fas fa-qrcode'],
    ['question-circle-o', 'far fa-question-circle'],
    ['question-circle', 'fas fa-question-circle'],
    ['question', 'fas fa-question'],
    ['quora', 'fab fa-quora'],
    ['quote-left', 'fas fa-quote-left'],
    ['quote-right', 'fas fa-quote-right'],
    ['ra', 'fab fa-rebel'],
    ['random', 'fas fa-random'],
    ['ravelry', 'fab fa-ravelry'],
    ['rebel', 'fab fa-rebel'],
    ['recycle', 'fas fa-recycle'],
    ['reddit-alien', 'fab fa-reddit-alien'],
    ['reddit-square', 'fab fa-reddit-square'],
    ['reddit', 'fab fa-reddit'],
    ['refresh', 'fa fa-sync'],
    ['registered', 'far fa-registered'],
    ['remove', 'fa fa-times'],
    ['renren', 'fab fa-renren'],
    ['reorder', 'fa fa-bars'],
    ['repeat', 'fa fa-redo'],
    ['reply-all', 'fas fa-reply-all'],
    ['reply', 'fas fa-reply'],
    ['resistance', 'fab fa-rebel'],
    ['retweet', 'fas fa-retweet'],
    ['rmb', 'fa fa-yen-sign'],
    ['road', 'fas fa-road'],
    ['rocket', 'fas fa-rocket'],
    ['rotate-left', 'fa fa-undo'],
    ['rotate-right', 'fa fa-redo'],
    ['rouble', 'fa fa-ruble-sign'],
    ['rss-square', 'fas fa-rss-square'],
    ['rss', 'fas fa-rss'],
    ['rub', 'fa fa-ruble-sign'],
    ['ruble', 'fa fa-ruble-sign'],
    ['rupee', 'fa fa-rupee-sign'],
    ['s15', 'fa fa-bath'],
    ['safari', 'fab fa-safari'],
    ['save', 'fas fa-save'],
    ['scissors', 'fa fa-cut'],
    ['scribd', 'fab fa-scribd'],
    ['search-minus', 'fas fa-search-minus'],
    ['search-plus', 'fas fa-search-plus'],
    ['search', 'fas fa-search'],
    ['sellsy', 'fab fa-sellsy'],
    ['send-o', 'far fa-paper-plane'],
    ['send', 'fa fa-paper-plane'],
    ['server', 'fas fa-server'],
    ['share-alt-square', 'fas fa-share-alt-square'],
    ['share-alt', 'fas fa-share-alt'],
    ['share-square-o', 'far fa-share-square'],
    ['share-square', 'fas fa-share-square'],
    ['share', 'fas fa-share'],
    ['shekel', 'fa fa-shekel-sign'],
    ['sheqel', 'fa fa-shekel-sign'],
    ['shield', 'fa fa-shield-alt'],
    ['ship', 'fas fa-ship'],
    ['shirtsinbulk', 'fab fa-shirtsinbulk'],
    ['shopping-bag', 'fas fa-shopping-bag'],
    ['shopping-basket', 'fas fa-shopping-basket'],
    ['shopping-cart', 'fas fa-shopping-cart'],
    ['shower', 'fas fa-shower'],
    ['sign-in', 'fa fa-sign-in-alt'],
    ['sign-language', 'fas fa-sign-language'],
    ['sign-out', 'fa fa-sign-out-alt'],
    ['signal', 'fas fa-signal'],
    ['signing', 'fa fa-sign-language'],
    ['simplybuilt', 'fab fa-simplybuilt'],
    ['sitemap', 'fas fa-sitemap'],
    ['skyatlas', 'fab fa-skyatlas'],
    ['skype', 'fab fa-skype'],
    ['slack', 'fab fa-slack'],
    ['sliders', 'fa fa-sliders-h'],
    ['slideshare', 'fab fa-slideshare'],
    ['smile-o', 'far fa-smile'],
    ['snapchat-ghost', 'fab fa-snapchat-ghost'],
    ['snapchat-square', 'fab fa-snapchat-square'],
    ['snapchat', 'fab fa-snapchat'],
    ['snowflake-o', 'far fa-snowflake'],
    ['soccer-ball-o', 'far fa-futbol'],
    ['sort-alpha-asc', 'fa fa-sort-alpha-down'],
    ['sort-alpha-desc', 'fa fa-sort-alpha-down-alt'],
    ['sort-amount-asc', 'fa fa-sort-amount-down'],
    ['sort-amount-desc', 'fa fa-sort-amount-down-alt'],
    ['sort-asc', 'fa fa-sort-up'],
    ['sort-desc', 'fa fa-sort-down'],
    ['sort-down', 'fas fa-sort-down'],
    ['sort-numeric-asc', 'fa fa-sort-numeric-down'],
    ['sort-numeric-desc', 'fa fa-sort-numeric-down-alt'],
    ['sort-up', 'fas fa-sort-up'],
    ['sort', 'fas fa-sort'],
    ['soundcloud', 'fab fa-soundcloud'],
    ['space-shuttle', 'fas fa-space-shuttle'],
    ['spinner', 'fas fa-spinner'],
    ['spoon', 'fa fa-utensil-spoon'],
    ['spotify', 'fab fa-spotify'],
    ['square-o', 'far fa-square'],
    ['square', 'fas fa-square'],
    ['stack-exchange', 'fab fa-stack-exchange'],
    ['stack-overflow', 'fab fa-stack-overflow'],
    ['star-half-empty', 'far fa-star-half'],
    ['star-half-full', 'far fa-star-half'],
    ['star-half-o', 'far fa-star-half'],
    ['star-half', 'fas fa-star-half'],
    ['star-o', 'far fa-star'],
    ['star', 'fas fa-star'],
    ['steam-square', 'fab fa-steam-square'],
    ['steam', 'fab fa-steam'],
    ['step-backward', 'fas fa-step-backward'],
    ['step-forward', 'fas fa-step-forward'],
    ['stethoscope', 'fas fa-stethoscope'],
    ['sticky-note-o', 'far fa-sticky-note'],
    ['sticky-note', 'fas fa-sticky-note'],
    ['stop-circle-o', 'far fa-stop-circle'],
    ['stop-circle', 'fas fa-stop-circle'],
    ['stop', 'fas fa-stop'],
    ['street-view', 'fas fa-street-view'],
    ['strikethrough', 'fas fa-strikethrough'],
    ['stumbleupon-circle', 'fab fa-stumbleupon-circle'],
    ['stumbleupon', 'fab fa-stumbleupon'],
    ['subscript', 'fas fa-subscript'],
    ['subway', 'fas fa-subway'],
    ['suitcase', 'fas fa-suitcase'],
    ['sun-o', 'far fa-sun'],
    ['superpowers', 'fab fa-superpowers'],
    ['superscript', 'fas fa-superscript'],
    ['support', 'far fa-life-ring'],
    ['table', 'fas fa-table'],
    ['tablet', 'fa fa-tablet-alt'],
    ['tachometer', 'fa fa-tachometer-alt'],
    ['tag', 'fas fa-tag'],
    ['tags', 'fas fa-tags'],
    ['tasks', 'fas fa-tasks'],
    ['taxi', 'fas fa-taxi'],
    ['telegram', 'fab fa-telegram'],
    ['television', 'fa fa-tv'],
    ['tencent-weibo', 'fab fa-tencent-weibo'],
    ['terminal', 'fas fa-terminal'],
    ['text-height', 'fas fa-text-height'],
    ['text-width', 'fas fa-text-width'],
    ['th-large', 'fas fa-th-large'],
    ['th-list', 'fas fa-th-list'],
    ['th', 'fas fa-th'],
    ['themeisle', 'fab fa-themeisle'],
    ['thermometer-0', 'fa fa-thermometer-empty'],
    ['thermometer-1', 'fa fa-thermometer-quarter'],
    ['thermometer-2', 'fa fa-thermometer-half'],
    ['thermometer-3', 'fa fa-thermometer-three-quarters'],
    ['thermometer-4', 'fa fa-thermometer-full'],
    ['thermometer-empty', 'fas fa-thermometer-empty'],
    ['thermometer-full', 'fas fa-thermometer-full'],
    ['thermometer-half', 'fas fa-thermometer-half'],
    ['thermometer-quarter', 'fas fa-thermometer-quarter'],
    ['thermometer-three-quarters', 'fas fa-thermometer-three-quarters'],
    ['thermometer', 'fa fa-thermometer-full'],
    ['thumb-tack', 'fa fa-thumbtack'],
    ['thumbs-down', 'fas fa-thumbs-down'],
    ['thumbs-o-down', 'far fa-thumbs-down'],
    ['thumbs-o-up', 'far fa-thumbs-up'],
    ['thumbs-up', 'fas fa-thumbs-up'],
    ['ticket', 'fa fa-ticket-alt'],
    ['times-circle-o', 'far fa-times-circle'],
    ['times-circle', 'fas fa-times-circle'],
    ['times-rectangle-o', 'far fa-window-close'],
    ['times-rectangle', 'fa fa-window-close'],
    ['times', 'fas fa-times'],
    ['tint', 'fas fa-tint'],
    ['toggle-down', 'far fa-caret-square-down'],
    ['toggle-left', 'far fa-caret-square-left'],
    ['toggle-off', 'fas fa-toggle-off'],
    ['toggle-on', 'fas fa-toggle-on'],
    ['toggle-right', 'far fa-caret-square-right'],
    ['toggle-up', 'far fa-caret-square-up'],
    ['trademark', 'fas fa-trademark'],
    ['train', 'fas fa-train'],
    ['transgender-alt', 'fas fa-transgender-alt'],
    ['transgender', 'fas fa-transgender'],
    ['trash-o', 'far fa-trash-alt'],
    ['trash', 'fa fa-trash-alt'],
    ['tree', 'fas fa-tree'],
    ['trello', 'fab fa-trello'],
    //['tripadvisor', ''], see https://github.com/FortAwesome/Font-Awesome/issues/18180#issuecomment-900998867
    ['trophy', 'fas fa-trophy'],
    ['truck', 'fas fa-truck'],
    ['try', 'fa fa-lira-sign'],
    ['tty', 'fas fa-tty'],
    ['tumblr-square', 'fab fa-tumblr-square'],
    ['tumblr', 'fab fa-tumblr'],
    ['turkish-lira', 'fa fa-lira-sign'],
    ['tv', 'fas fa-tv'],
    ['twitch', 'fab fa-twitch'],
    ['twitter-square', 'fab fa-twitter-square'],
    ['twitter', 'fab fa-twitter'],
    ['umbrella', 'fas fa-umbrella'],
    ['underline', 'fas fa-underline'],
    ['undo', 'fas fa-undo'],
    ['universal-access', 'fas fa-universal-access'],
    ['university', 'fas fa-university'],
    ['unlink', 'fas fa-unlink'],
    ['unlock-alt', 'fas fa-unlock-alt'],
    ['unlock', 'fas fa-unlock'],
    ['unsorted', 'fa fa-sort'],
    ['upload', 'fas fa-upload'],
    ['usb', 'fab fa-usb'],
    ['usd', 'fa fa-dollar-sign'],
    ['user-circle-o', 'far fa-user-circle'],
    ['user-circle', 'fas fa-user-circle'],
    ['user-md', 'fas fa-user-md'],
    ['user-o', 'far fa-user'],
    ['user-plus', 'fas fa-user-plus'],
    ['user-secret', 'fas fa-user-secret'],
    ['user-times', 'fas fa-user-times'],
    ['user', 'fas fa-user'],
    ['users', 'fas fa-users'],
    ['vcard-o', 'far fa-address-card'],
    ['vcard', 'fa fa-address-card'],
    ['venus-double', 'fas fa-venus-double'],
    ['venus-mars', 'fas fa-venus-mars'],
    ['venus', 'fas fa-venus'],
    ['viacoin', 'fab fa-viacoin'],
    ['viadeo-square', 'fab fa-viadeo-square'],
    ['viadeo', 'fab fa-viadeo'],
    ['video-camera', 'fa fa-video'],
    ['vimeo-square', 'fab fa-vimeo-square'],
    ['vimeo', 'fab fa-vimeo-v'],
    ['vine', 'fab fa-vine'],
    ['vk', 'fab fa-vk'],
    ['volume-control-phone', 'fa fa-phone-volume'],
    ['volume-down', 'fas fa-volume-down'],
    ['volume-off', 'fas fa-volume-off'],
    ['volume-up', 'fas fa-volume-up'],
    ['warning', 'fa fa-exclamation-triangle'],
    ['wechat', 'fab fa-weixin'],
    ['weibo', 'fab fa-weibo'],
    ['weixin', 'fab fa-weixin'],
    ['whatsapp', 'fab fa-whatsapp'],
    ['wheelchair-alt', 'fab fa-accessible-icon'],
    ['wheelchair', 'fas fa-wheelchair'],
    ['wifi', 'fas fa-wifi'],
    ['wikipedia-w', 'fab fa-wikipedia-w'],
    ['window-close-o', 'far fa-window-close'],
    ['window-close', 'fas fa-window-close'],
    ['window-maximize', 'far fa-window-maximize'],
    ['window-minimize', 'fas fa-window-minimize'],
    ['window-restore', 'far fa-window-restore'],
    ['windows', 'fab fa-windows'],
    ['won', 'fa fa-won-sign'],
    ['wordpress', 'fab fa-wordpress'],
    ['wpbeginner', 'fab fa-wpbeginner'],
    ['wpexplorer', 'fab fa-wpexplorer'],
    ['wpforms', 'fab fa-wpforms'],
    ['wrench', 'fas fa-wrench'],
    ['xing-square', 'fab fa-xing-square'],
    ['xing', 'fab fa-xing'],
    ['y-combinator-square', 'fab fa-hacker-news'],
    ['y-combinator', 'fab fa-y-combinator'],
    ['yahoo', 'fab fa-yahoo'],
    ['yc-square', 'fab fa-hacker-news'],
    ['yc', 'fab fa-y-combinator'],
    ['yelp', 'fab fa-yelp'],
    ['yen', 'fa fa-yen-sign'],
    ['yoast', 'fab fa-yoast'],
    ['youtube-play', 'fab fa-youtube'],
    ['youtube-square', 'fab fa-youtube-square'],
    ['youtube', 'fab fa-youtube'],
]);

/**
 * @param suffix The suffix part of the FontAwesome v4 icons (`fa fa-<suffix>`)
 *
 * @returns empty string if not found
 */
export function convertFontAwesomeSuffix(suffix: string): string
{
  return MAP.has(suffix) ? <string>MAP.get(suffix) : '';
}
