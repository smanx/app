let frFR = {
  "pageTitle"    : "Nintendo Switch Payload Loader",
  "pageSubtitle" : "Fusee Launcher porté à JavaScript avec WebUSB.",
  "dangerDanger"   :"Ceci a était testé modérément. Ceci dit, aucun bug n'a été découvert, et je ne suis responsable d'aucun problème!",
  "warningWindows" :"Ceci ne marche pas sur WINDOWS suite à la manière dont WebUSB a était implémentée sur Chrome. (et d'autres raisons probablement!)",
  "warningBrowser" :"Ceci ne marche que sur Chrome, Car les autres navigateurs 'intêgrent pas WebUSB.",
  "warningLinux"   :"Sur linux vous pouvez avoir l’erreur 'Accès interdit' ou 'Pas d'appareil compatible' dans le dialogue de connection! Si vous l’avez ,vous pouvez essayer de créer un fichier à  <code>/etc/udev/rules.d/50-switch.rules</code>Avec le contenu suivant:<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>",
  "warningTested"  :"Ceci à été testé et fonctionne sur Linux, OSX, Android (non-root) et Chromebooks. Cela peut varier suivant votre configuration.",
  "labelInstructions" :"Instructions:",
  "liRCM"          :"Mettez la Switch en RCM mode, et connectez là à votre appareil.",
  "liSelect"       :"Sélectionnez le payload, ou uploadez en un.",
  "liPress"        :"Appuyer sur 'Chargez le Payload!'",
  "liAPX"          :"Sur l'écran de sélection qui apparaît, selectionner 'APX' et cliquer sur 'Connecter'.",
  "liLaunch"       :"Si tout est bon le Payload va démarrer!",
  "h1SetupDelivery" :"Configuration de l’envoi des Payloads",
  "h4SelectPayload" :"Sélectionnez le Payload:",
  "h3Log"           :"Log:",
  "h4GetByteArray"  :"Get payload byte array (don't sploit)",
  "goButton"        :"Chargez le Payload!",
  "clearlogsbutton" :"Supprimez les Logs",
  "disclaimer1" :'Les sources sont disponibles sur <a href="https://github.com/AtlasNX/web-cfw-loader/">GitHub</a> (ou en cliquant sur la source, il n\'y a pas de backend!).',
  "disclaimer2" :'Porter de <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Merci à ktemkin et ReSwitched, aussi à <br><a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">Atlas44 et son site</a> un bon point de démarrage pour ceci.',
  "disclaimer4" :'Finalement , merci à  <a href="https://github.com/falquinho">falquinho</a> pour le nouveau format du bootstrap et pour la traduction portugaise, <a href="https://github.com/wababc">wababc</a> pour la traduction Française, <a href="https://github.com/Filo97">Filo97</a> pour la traduction italienne, <a href="https://github.com/tumGER">tumGER</a>pour la traduction allemande, <a href="https://github.com/lordfriky">Lord_Friky</a>pour la traduction espagnole, et <a href="https://github.com/lorek123">Lorek</a>pour la traduction polonaise.'
}