function createScore() {\n\n\t/*** Clases clave para ayudar a Bersara ***/\n\t//                                        //\n\t// Phaser.Text                            //\n\t// Phaser.Sprite                          //\n\t//                                        //\n\t/******************************************/\n\n\t/* Para crear el texto vamos a usar la función \n\t   'Phaser.Game.add.text(x, y, text, style, group)', que nos \n\t   devolverá un objeto de la clase 'Phaser.Text'. Vamos a \n\t   guardar este texto en la variable 'this.scoreText', para \n\t   poder hacer referencia a el más adelante.\n\t   Pon el texto en la posicion (16,16),\n\t   con un tamaño de fuente de 32px y color blanco.\n\t   El texto que necesitamos crear es 'this.scoreString' +\n\t   'this.score'. 'this.scoreString' contiene el texto "score" \n\t   y 'this.score' contiene la puntuación actual */\n\n\n\t/* Por otro lado queremos que el texto este siempre visible en\n\t   la pantalla. Para ello tenemos que fijar el texto a la cámara.\n\t   Podemos hacerlo con la propiedad 'fixedToCamera' del texto */\n\n\n\n}