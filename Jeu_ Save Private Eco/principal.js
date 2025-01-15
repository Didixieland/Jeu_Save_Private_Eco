kaboom({
    background: [194, 218, 184],
    width: 1000,
    height: 600,
});

// Fonction pour le resize du jeu (en partie aide chatgpt)
function resizeGame() {
    const canvas = document.querySelector("canvas");
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    canvas.width = width;
    canvas.height = height;
    kaboom({
        width: width,
        height: height,
    });

}

resizeGame();

window.addEventListener("resize", resizeGame);

// sprites: certaines (ceux des insects et du planet qui parle) crée par chatgpt et toujours remodifiés par moi pour les faire animer ou les rendre plus "beaux", autres sur itch.io (explosion, cercle). Le fond/jardin,le bullet, et le cannon sont fait par moi. 
loadRoot("assets/");

loadSprite("grassBackground", "grassBackground.png");

loadSprite("grassBackgroundDialogue", "grass.png");

loadSprite("gameOverImg", "gameOverImg.png", {
    sliceX: 1,
    sliceY: 2,  
    anims: {
        gameOverAnim: {
            from: 0,  
            to: 1,    
            loop: true, 
            speed: 3,  
        }
    }
});

loadSprite("VictorySprite", "VictorySprite.png", {
    sliceX: 2,
    sliceY: 1,  
    anims: {
        VictorySpriteAnim: {
            from: 0,  
            to: 1,    
            loop: true, 
            speed: 2,  
        }
    }
});

loadSprite("healthBar", "lifeBar.png", {
    sliceX: 5, 
    sliceY: 2,  
});

loadSprite("pointsCircle", "pointsCircle.png", {
    sliceX: 10, 
    sliceY: 1,  
});

loadSprite("bullet1", "bullet1.png", {
    sliceX: 1,  
    sliceY: 2,
    anims: {
        mouvement: {
            from: 0,
            to: 1,
            speed: 10,
            loop: true,
        },
    },
});

loadSprite("planetCentre1", "planetCentre1.png", {
    sliceX: 10,
    sliceY: 1,
    anims: {
        PlanetRotation: {
            from: 0,
            to: 9,
            speed: 2.5,
            loop: true,
        },
    },
});

loadSprite("planetCentre2", "planetCentre2.png", {
    sliceX: 10,
    sliceY: 1,
    anims: {
        PlanetRotation: {
            from: 0,
            to: 9,
            speed: 2.5,
            loop: true,
        },
    },
});

loadSprite("planetCentre3", "planetCentre3.png", {
    sliceX: 10,
    sliceY: 1,
    anims: {
        PlanetRotation: {
            from: 0,
            to: 9,
            speed: 2.5,
            loop: true,
        },
    },
});

loadSprite("planetCentre4", "planetCentre4.png", {
    sliceX: 10,
    sliceY: 1,
    anims: {
        PlanetRotation: {
            from: 0,
            to: 9,
            speed: 2.5,
            loop: true,
        },
    },
});

loadSprite("planetCentre5", "planetCentre5.png", {
    sliceX: 10,
    sliceY: 1,
    anims: {
        PlanetRotation: {
            from: 0,
            to: 9,
            speed: 2.5,
            loop: true,
        },
    },
});


loadSprite("cannon1", "cannon1.png");

loadSprite("mosquitoTigre", "mosquitoTigre.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
        mouvement: {
            from: 0,
            to: 1,
            speed: 2.5,
            loop: true,
        },
    },
});

loadSprite("tarloNormale", "tarloNormale.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
        mouvement: {
            from: 0,
            to: 1,
            speed: 2.5,
            loop: true,
        },
    },
});

loadSprite("scarabeeJaponais", "scarabeeJaponais.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
        mouvement: {
            from: 0,
            to: 1,
            speed: 2.5,
            loop: true,
        },
    },
});

loadSprite("scarabeeNormale", "scarabeeNormale.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
        mouvement: {
            from: 0,
            to: 1,
            speed: 2.5,
            loop: true,
        },
    },
});


loadSprite("tarloAsiatico", "tarloAsiatic.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
        mouvement: {
            from: 0,
            to: 1,
            speed: 2.5,
            loop: true,
        },
    },
});

loadSprite("insectExplosion", "insectExplosion.png", {
    sliceX: 6,
    sliceY: 2,
    anims: {
        explode: {
            from: 0,
            to: 11,
            speed: 30,
            loop: false,
        },
    },
});

loadSprite("planetParle", "planetParle.png");
loadSprite("planetContent", "planetContent.png");
loadSprite("initialScreen", "InitialScreen.png");

//toutes les musiques et effets sonores
loadSound("shootCannon","shoot.wav");
loadSound("backgroundmusic", "backgroundmusic.mp3");
loadSound("song1","songLevel.mp3");
loadSound("song2","levelSong.mp3");
loadSound("song3","otherLevelSong.mp3");
loadSound("SongEnemy","Menu_In.wav");
loadSound("SongHealingEnemy","Menu_Out.wav");
loadSound("SlowStart","SlowStart.wav");
loadSound("startMusic","startSong.mp3");

//fonction pour la mousique dans les scenes des dialogues
let backgroundmusic;
function playMusic() {
    if (!backgroundmusic) {
        backgroundmusic = play("backgroundmusic", {
            loop: true,
            volume: 1,
        });
    } 
}

function stopMusic() {
    if (backgroundmusic) {
        backgroundmusic.stop();
        backgroundmusic = null; 
    }
}

//fonction pour la mousique dans la scene d'accueil (avec l'autre manière elle presente des bugs)
let startMusic;
function playStartMusic() {
    if (!startMusic) {
        startMusic = play("startMusic", {
            loop: true,
            volume: 0.5,
        });
    } 
}

function stopStartMusic() {
    if (startMusic) {
        startMusic.stop();
        startMusic = null; 
    }
}


// SCENE ACCUEIL
scene("accueil", () => {
    //ajoute de l'image initiale
    const bg1 = add([
        sprite("initialScreen"),
        pos(0, 0),
        fixed(), 
    ]);

    playStartMusic("startMusic.mp3", {
        volume: 0.5,
        loop: false,
    });

    // adapte l'image à l'écran
    bg1.scale = vec2(width() / bg1.width, height() / bg1.height);

    // Texte pour le tab
    const playText = add([
        text("Appuyez sur la barre d'espace pour jouer !", {
            width: 1200,
            size: 45,
        }),
        anchor("center"),
        pos(width() / 2, height() - 50),
        color(255, 255, 0),
        z(1),
        area(),
    ]);

    if (!bg1.width || !bg1.height) {
        console.error("L'image ne marche pas");
    }

    // effect intermittent du texte
    loop(0.4, () => {
        playText.hidden = !playText.hidden; 
    });

    // avec l'appui sur le tab il passe à la prochaine scène et la musique finit
    onKeyPress("space", () => {
        stopStartMusic();
        go("dialogue1");
    });
});


scene("dialogue1", () => {
    const dialogs = [
        "Hello mon ami!",
        "J'ai besoin de ton aide... tu aimes la nature, n'est-ce pas ?",
        "Parfait ! Alors nous nous entendrons bien. ",
        "Je suis Eco, l'écosystème. J'aime la nature et l'équilibre. Cependant, certains êtres humains par leurs actions ne semblent pas avoir les mêmes principes que moi.",
        "Je dois maintenant m'occuper d'espèces d'insectes non indigènes qui risquent de se multiplier et de faire de gros dégâts. Nous sommes en guerre, mon ami !",
        "Ton rôle sera de me défendre contre ces espèces dangereuses avec mon canon à insecticide. Seras-tu à la hauteur ?",
        "Je l'espère !",
        "Dans ce PREMIER NIVEAU, tu devras me défendre contre le 'capricorne asiatique', qui est très dangereux pour de nombreuses espèces végétales.",
        "Il cause de très gros dégâts écologiques et économiques à de nombreuses cultures.",
        "son IDENTIKIT : Coléoptère noir avec des taches blanches sur le dos.",
        "Mais ATTENTION à ne pas le confondre avec son frère indigène, qui est brun. Il est utile à l'écosystème, il ne faut pas lui faire de mal ou j'en souffrirai.",
        "Dirige la souris dans la direction où tu veux tirer et clique sur la barre d'espace... compris ? !",
        "Dernier conseil : lorsque le bar qui m'entoure est chargé, vous pouvez cliquer sur la touche 'S' pour prendre un peu d'avance... cela t'aidera !",
        "Tu es prêt ?! En cliquant sur la barre d'espacement, votre première bataille commencera ! BONNE CHANCE !",
    ];

    playMusic(); 

    let curDialog = 0;

  //sprite du background
    const bg = add([
        sprite("grassBackgroundDialogue"),
        pos(0, 0),
        fixed(),  
    ]);

    // gestion dimensions background
    bg.scale = vec2(width() / bg.width, height() / bg.height); 

    // cadre pour dialogues
    const textbox = add([
        rect(width() - 200, 120, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(4),
        color(255, 255, 255),  
    ]);

    // texte dialogues
    const txt = add([
        text("", { size: 32, width: width() - 230, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0), 
    ]);


    const planetParle = add([
        sprite("planetParle"),  
        scale(2),  
        anchor("center"),
        pos(center().sub(0, 50)),  
    ]);


    function updateDialog() {
        txt.text = dialogs[curDialog]; 
    }


    onKeyPress("space", () => {
        curDialog++;
        if (curDialog < dialogs.length) {
            updateDialog(); 
        } else {
            go("scene1");  
            stopMusic();
        }
    });
    updateDialog();
});

//SCENE 1 - level 1
scene("scene1", () => {
    let score = 0;
    let slowMotionActive = false;
    let gameOver = false;
    let timeLeft = 60; 

    const song1Music = play("song1", {
        volume: 0.7,
        loop: true,
    });

    // BACKGROUND
    add([
        sprite("grassBackground"),
        pos(0, 0),
        scale(width() / 300, height() / 200),
        fixed(),
    ]);

// HEALTH BAR
const healthBar = add([
    sprite("healthBar", { frame: 0 }), 
    pos(10, 10), 
    anchor("topleft"), 
    scale(1.5 ), 
    fixed(), 
    "healthBar",
]);

    // Montrer le timer
    const timerLabel = add([
        text(`Time left: ${timeLeft}`, {
            font: "calibri",
            size: 20,
        }),
        pos(width() - 100, height() - 50),
        anchor("center"),
        z(50),
        {
            update() {
                this.text = `Time left: ${timeLeft}`;
            },
        },
    ]);

    const planet = add([
        sprite("planetCentre1", {
            anim: "PlanetRotation",
        }),
        pos(width() / 2, height() / 2),
        rotate(0),
        anchor("center"),
        area(),
        "planet", 
        {
            health: 100,
        },
    ]);

//SCORE avec animation cercle autour du planet (pour le slowmotion)
const scoreTracker = add([
    sprite("pointsCircle", { frame: 0 }), 
    pos(planet.pos.x, planet.pos.y), 
    anchor("center"), 
    scale(3.5), 
    fixed(), 
    "scoreTracker",
]);

 //HEALT du planet avec image-animation quand descend au dessous de un tot de health
    function checkPlanetHealth() {

        //pour ne faire pas depasser le 100 de planet health
        if (planet.health > 100) {
            planet.health = 100;
        }

        if (planet.health < 20) {
            planet.use(sprite("planetCentre5", {
                anim: "PlanetRotation",
            }));
        } else if (planet.health < 40) {
            planet.use(sprite("planetCentre4", {
                anim: "PlanetRotation",
            }));
        } else if (planet.health < 60) {
            planet.use(sprite("planetCentre3", {
                anim: "PlanetRotation",
            }));
        } else if (planet.health < 80) {
            planet.use(sprite("planetCentre2", {
                anim: "PlanetRotation",
            }));
        } else {
            planet.use(sprite("planetCentre1", {
                anim: "PlanetRotation",
            }));
        }
        updateHealthBar(planet.health);
    }
//fonction pour la barre health
    function updateHealthBar(health) {
        let frame = 0; 

        if (health > 90) {
            frame = 0;
        } else if (health > 80) {
            frame = 1;
        } else if (health > 70) {
            frame = 2;
        } else if (health > 60) {
            frame = 3;
        } else if (health > 50) {
            frame = 4;
        } else if (health > 40) {
            frame = 5;
        } else if (health > 30) {
            frame = 6;
        } else if (health > 20) {
            frame = 7;
        } else if (health > 10) {
            frame = 8;
        } else {
            frame = 9; 
        }
    
        healthBar.frame = frame;
    }    
// comment marche le score -> le scoreTracker c'est un'idée que ma donné chatGpt pour gerer des bugs sur le score
    function increaseScore() {
        score += 0.5;
        if (score >10) {score = 10}
        updateScoreTracker();
        console.log(`mis à jour score: Current score: ${score}`); //console log pour voir si marche
    }
    
    function decreaseScore() {
        score -= 2.5;
        if (score <0){score =0}
        updateScoreTracker();
        planet.health -= 9;
        updateHealthBar(planet.health);
        console.log(`Decreasing score. Current score: ${score}`);
        console.log(`Decreasing Healt!: ${planet.health}`);
    }
//fonction pour affichier le score
    function updateScoreTracker() {
        const maxFrames = 10; 
        let frame = Math.floor(score);  
        if (frame >= maxFrames) {
            frame = maxFrames - 1; 
        } else if (frame < 0) {
            frame = 0;  // pour ne pas aller en dessous de 0
        }
    
        scoreTracker.frame = frame;  // mis à jour du frame image avec le score
        console.log(`Updating score tracker. Score: ${score}, Frame: ${frame}`); //console log pour voir si marche
    }

    // Cannon
    const cannon = add([
        sprite("cannon1"),
        pos(planet.pos.x, planet.pos.y),
        anchor("center"),
        scale(1.5, 2.5),
        rotate(0),
        area(),
        "cannon",
    ]);
//aide de chatGPT pour gérér mieux la position du cannon et de consequence le shoot (avec la trigonometrie)
    cannon.onUpdate(() => {
        const mousePosition = mousePos();
        const direction = mousePosition.sub(planet.pos);
        const angle = Math.atan2(direction.y, direction.x);

        const offsetDistance = 70;
        const distanceToMouse = direction.len();

        if (distanceToMouse > 30) {
            cannon.angle = angle * (180 / Math.PI);

            const offset = vec2(Math.cos(angle), Math.sin(angle)).scale(offsetDistance);
            cannon.pos = planet.pos.add(offset);
        }
    }); 

    function shoot() {
        const bulletSpeed = 300;
        const angle = deg2rad(cannon.angle); //aide chatGPT pour gerer mieux en radiant l'angle du cannon par rapport au mouse
        const direction = vec2(Math.cos(angle), Math.sin(angle));
        const bulletStartPos = cannon.pos.add(direction.scale(cannon.height / 2));
        play("shootCannon", {
            volume: 0.5, 
        });
        const bullet = add([
            sprite("bullet1"),
            area(),
            pos(bulletStartPos),
            anchor("center"),
            rotate(cannon.angle + 90),
            scale(1.7),
            "bullet",
            { dir: direction, speed: bulletSpeed },
        ]);

        bullet.onUpdate(() => {
            bullet.move(bullet.dir.scale(bullet.speed * (slowMotionActive ? 0.5 : 1)));
            if (bullet.pos.x < 0 || bullet.pos.x > width() || bullet.pos.y < 0 || bullet.pos.y > height()) {
                destroy(bullet);
            }
        });

        bullet.onCollide("enemy", (enemy) => {
            destroy(bullet);
            playExplosion(enemy.pos);
            
            if (enemy.is("tarloNormale")) {
                play("SongHealingEnemy", {
                    volume: 0.5, 
                });
                console.log("TarloNormale hit");
                planet.health -= 10;
                decreaseScore();
            } else {
                console.log("Other enemy hit");
                play("SongEnemy", {
                    volume: 0.5, 
                });
                increaseScore(); 
            }
            
            destroy(enemy);
        });
    }

    function playExplosion(position) {
        const explosion = add([
            sprite("insectExplosion", {
                anim: "explode"
            }),
            pos(position),
            anchor("center"),
            scale(2),
        ]);

        explosion.onAnimEnd(() => {
            destroy(explosion);
        });
    }

    onKeyPress("space", () => {
        shoot();
    });

    // Slow motion function
    function activateSlowMotion() {
        if (score >= 9 && !slowMotionActive) {
            slowMotionActive = true;
            score = 0; //reset score à 0 quand slowmotion activé
            updateScoreTracker(score);
            wait(5, () => {
                slowMotionActive = false;
            });
        }
    }

    onKeyPress("s", () => {
        activateSlowMotion();
        play("SlowStart", {
            volume: 0.5, 
        });
    });

    function radiansToDegrees(radians) {
        return radians * (180 / Math.PI);
    }
// fonction pour le spawn des ennemies/insects de manière aléatoire dehors l'écran visible
    function spawnEnemy(spriteName, scaleValue, speedValue) {
        let side = Math.floor(Math.random() * 4);
        let x, y;
    
        switch (side) {
            case 0:
                x = -40;
                y = Math.random() * height();
                break;
            case 1:
                x = Math.random() * width();
                y = -40;
                break;
            case 2:
                x = width() + 40;
                y = Math.random() * height();
                break;
            case 3:
                x = Math.random() * width();
                y = height() + 40;
                break;
        }
    //l'insect avec les propriétés
        const enemy = add([
            sprite(spriteName, { anim: "mouvement" }), 
            pos(vec2(x, y)),
            anchor("center"), 
            rotate(0), 
            "enemy",
            area(),
            scale(scaleValue),
            { speed: speedValue },
        ]);
    //mis à jour de la position de l'ennemie qui va vers le planet centre
        enemy.onUpdate(() => {
            const dir = planet.pos.sub(enemy.pos).unit();
            enemy.move(dir.scale(enemy.speed * (slowMotionActive ? 0.3 : 1)));
            enemy.angle = radiansToDegrees(Math.atan2(dir.y, dir.x)) + 90;
        });
    
        // destruction ennemies/insect collision planet centre
        enemy.onCollide("planet", () => {
            destroy(enemy);  
            planet.health -= 7;  // moins 7 points health
            checkPlanetHealth();
            updateHealthBar(planet.health);
            if (planet.health <= 0) { //game over si health moins de 0
                gameOver = true;
                song1Music.stop();
                go("gameOver");
            }
        });
        // destruction collision avec bullet
        enemy.onCollide("bullet", (bullet) => {
            destroy(bullet);
            increaseScore(); //augment les points
            playExplosion(enemy.pos);
            destroy(enemy);
        });        
    }
//même principe pour les ennemies/insectes autoctones (ici le tarle normale)
    function spawnHealingEnemy(spriteName, scaleValue, speedValue) {
        let side = Math.floor(Math.random() * 4);
        let x, y;
    
        switch (side) {
            case 0:
                x = -40;
                y = Math.random() * height();
                break;
            case 1:
                x = Math.random() * width();
                y = -40;
                break;
            case 2:
                x = width() + 40;
                y = Math.random() * height();
                break;
            case 3:
                x = Math.random() * width();
                y = height() + 40;
                break;
        }
    
        const enemy = add([
            sprite(spriteName, { anim: "mouvement" }),
            pos(vec2(x, y)),
            anchor("center"),
            rotate(0),
            "enemy",
            area(),
            scale(scaleValue),
            { speed: speedValue },
        ]);
    
        enemy.onUpdate(() => {
            const dir = planet.pos.sub(enemy.pos).unit();
            enemy.move(dir.scale(enemy.speed * (slowMotionActive ? 0.3 : 1)));
            enemy.angle = radiansToDegrees(Math.atan2(dir.y, dir.x)) + 90;
        });
        // différemment des insectes autoctones si il est touché par le bullet il y a une diminution du score et de la santé du planète
        enemy.onCollide("bullet", (bullet) => {
            destroy(bullet);
            if (spriteName === "tarloNormale") {
                play("SongHealingEnemy", {
                    volume: 0.5, 
                });
               decreaseScore(); 
                planet.health -= 1; //si tarle normale est hit alors -1
            } else {
                increaseScore();
            }
            playExplosion(enemy.pos);
            destroy(enemy);  
        });
    // même principe mais avec collision avec planet centre
        enemy.onCollide("planet", () => {
            if (spriteName === "tarloNormale") {
                planet.health += 15;
                updateHealthBar(planet.health);   // plus 2 si est tarle autoctone
            } else {
                planet.health -= 7;  // moins 7 points si est tarle non autoctone
            }

            checkPlanetHealth();
            updateHealthBar(planet.health); //mis à jour barre planet health
            destroy(enemy);
            if (planet.health <= 0) {
                gameOver = true;
                song1Music.stop();
                go("gameOver");
            }
        });
    }
    
    loop(4, () => { //ennemies spawn moins souvent
        spawnHealingEnemy("tarloNormale", 0.22, 50);
    });
    
    loop(1.8, () => { //ennemies spawn plus frequent
        spawnEnemy("tarloAsiatico", 0.2, 50);
    });

    // countdown du timer
    loop(1, () => {
        if (timeLeft > 0) {
            timeLeft -= 1;
        } else if (!gameOver) {
            song1Music.stop(),
            go("dialogue2");
        }
    });

    // Gameover si temps est fini
    wait(60, () => {
        if (!gameOver) {
            song1Music.stop();
            go("gameOver");
            
        }
    });
});

// SCENE PAUSE 2
scene("dialogue2", () => {
    const dialogs = [
        "Bien joué pour le premier niveau !",
        "Maintenant, la vraie bataille commence.",
        "Nous devons affronter un autre type de menace :",
        "Le 'Moustique Tigre'.",
        "Cet insecte peut être transporteur de maladies comme la dengue !",
        "Il a des rayures noires et blanches ",
        "Grâce à ses œufs très résistants, il a probablement été transporté depuis les pays chauds dans les roues des véhicules.",
        "Actuellement présent principalement sud de la Suisse, mais avec le réchauffement climatique, il pourrait bientôt se trouver au-delà des Alpes.",
        "La moustique vole et elle est partout, elle est donc plus rapide que les autres insectes que tu as rencontrés, fais attention.",
        "Rappelle-toi que tu peux utiliser quelques secondes de slow motion pour t'aider.",
        "Prêt pour la prochaine bataille ? Appuie sur la barre d'espace pour commencer !",
    ];

playMusic();

    let curDialog = 0;

    const bg = add([
        sprite("grassBackgroundDialogue"),
        pos(0, 0),
        fixed(), 
    ]);

    //mis à jour background image selon la juste proportion
    bg.scale = vec2(width() / bg.width, height() / bg.height); 

    //carré pour le txt du dialogue
    const textbox = add([
        rect(width() - 200, 120, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(4),
        color(255, 255, 255),
    ]);

    // Texte dialogue
    const txt = add([
        text("", { size: 32, width: width() - 230, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),  
    ]);

    
    const planetParle = add([
        sprite("planetParle"),
        scale(2), 
        anchor("center"),
        pos(center().sub(0, 50)),
    ]);

    
    const planetContent = add([
        sprite("planetContent"),
        scale(1),  
        anchor("center"),
        pos(center().sub(0, 50)),
        { visible: true },
    ]);

    // fonction mise à jour dialogue
    function updateDialog() {
        txt.text = dialogs[curDialog]; //mis à jour dialogue texte

        // montre image planetContent juste au début puis est cachée
        if (curDialog === 0) {
            planetContent.hidden = false; 
            planetParle.hidden = true; 
        } else {
            planetContent.hidden = true;
            planetParle.hidden = false; 
        }
    }

    // avec le tab il passe au prochaine dialogue
    onKeyPress("space", () => {
        curDialog++;
        if (curDialog < dialogs.length) {
            updateDialog();
        } else {
            go("scene2");
            stopMusic();
        }
    });

    // commence premier dialogue
    updateDialog();
});

// SCENE 2 - level 2
scene("scene2", () => {
    let score = 0;
    let slowMotionActive = false;
    let gameOver = false;
    let timeLeft = 60; //timer niveau en secondes

    const song2Music = play("song2", {
        volume: 0.7,
        loop: true,
    });

    // BACKGROUND
    add([
        sprite("grassBackground"),
        pos(0, 0),
        scale(width() / 300, height() / 200),
        fixed(),
    ]);


// HEALTH BAR
const healthBar = add([
    sprite("healthBar", { frame: 0 }), 
    pos(10, 10), 
    anchor("topleft"), 
    scale(1.5 ), 
    fixed(), 
    "healthBar",
]);

    // Display the timer
    const timerLabel = add([
        text(`Time left: ${timeLeft}`, {
            font: "calibri",
            size: 20,
        }),
        pos(width() - 100, height() - 50),
        anchor("center"),
        z(50),
        {
            update() {
                this.text = `Time left: ${timeLeft}`;
            },
        },
    ]);

    const planet = add([
        sprite("planetCentre1", {
            anim: "PlanetRotation",
        }),
        pos(width() / 2, height() / 2),
        rotate(0),
        anchor("center"),
        area(),
        "planet", 
        {
            health: 100,
        },
    ]);

//SCORE 
const scoreTracker = add([
    sprite("pointsCircle", { frame: 0 }), 
    pos(planet.pos.x, planet.pos.y), 
    anchor("center"), 
    scale(3.5), 
    fixed(), 
    "scoreTracker",
]);
 //HEALT
    function checkPlanetHealth() {

        if (planet.health > 100) {
            planet.health = 100;
        }

        if (planet.health < 20) {
            planet.use(sprite("planetCentre5", {
                anim: "PlanetRotation",
            }));
        } else if (planet.health < 40) {
            planet.use(sprite("planetCentre4", {
                anim: "PlanetRotation",
            }));
        } else if (planet.health < 60) {
            planet.use(sprite("planetCentre3", {
                anim: "PlanetRotation",
            }));
        } else if (planet.health < 80) {
            planet.use(sprite("planetCentre2", {
                anim: "PlanetRotation",
            }));
        } else {
            planet.use(sprite("planetCentre1", {
                anim: "PlanetRotation",
            }));
        }
        updateHealthBar(planet.health);
    }

    function updateHealthBar(health) {
        let frame = 0;
    
        if (health > 90) {
            frame = 0;
        } else if (health > 80) {
            frame = 1;
        } else if (health > 70) {
            frame = 2;
        } else if (health > 60) {
            frame = 3;
        } else if (health > 50) {
            frame = 4;
        } else if (health > 40) {
            frame = 5;
        } else if (health > 30) {
            frame = 6;
        } else if (health > 20) {
            frame = 7;
        } else if (health > 10) {
            frame = 8;
        } else {
            frame = 9;
        }
    
        healthBar.frame = frame;
    }    

    function increaseScore() {
        score += 0.5;
        if (score >10) {score = 10}
        updateScoreTracker();
        console.log(`Increasing score. Current score: ${score}`);
    }
    
    function decreaseScore() {
        score -= 2.5;
        if (score <0){score =0}
        updateScoreTracker();
        planet.health -= 9;
        updateHealthBar(planet.health);
        console.log(`Decreasing score. Current score: ${score}`);
        console.log(`Decreasing Healt!: ${planet.health}`);
    }

    function updateScoreTracker() {
        const maxFrames = 10; 
        let frame = Math.floor(score); 
    
        if (frame >= maxFrames) {
            frame = maxFrames - 1;
        } else if (frame < 0) {
            frame = 0;
        }
    
        scoreTracker.frame = frame;
        console.log(`Updating score tracker. Score: ${score}, Frame: ${frame}`);
    }
    
     
     // Collision entre  planet et ennemies
     planet.onCollide("enemy", (enemy) => {
        if (enemy.is("tarloNormale")) {
            planet.health += 2;
        } else {
            planet.health -= 7;
        }
    
        updateHealthBar(planet.health);
    
        destroy(enemy);
        if (planet.health <= 0) {
            song2Music.stop();
            go("gameOver");
        }
    });
    

    // Cannon
    const cannon = add([
        sprite("cannon1"),
        pos(planet.pos.x, planet.pos.y),
        anchor("center"),
        scale(1.5, 2.5),
        rotate(0),
        area(),
        "cannon",
    ]);

    cannon.onUpdate(() => {
        const mousePosition = mousePos();
        const direction = mousePosition.sub(planet.pos);
        const angle = Math.atan2(direction.y, direction.x);

        const offsetDistance = 70;
        const distanceToMouse = direction.len();

        if (distanceToMouse > 30) {
            cannon.angle = angle * (180 / Math.PI);

            const offset = vec2(Math.cos(angle), Math.sin(angle)).scale(offsetDistance);
            cannon.pos = planet.pos.add(offset);
        }
    }); 

    function shoot() {
        const bulletSpeed = 300;
        const angle = deg2rad(cannon.angle);
        const direction = vec2(Math.cos(angle), Math.sin(angle));
        play("shootCannon", {
            volume: 0.5, 
        });
        const bulletStartPos = cannon.pos.add(direction.scale(cannon.height / 2));

        const bullet = add([
            sprite("bullet1"),
            area(),
            pos(bulletStartPos),
            anchor("center"),
            rotate(cannon.angle + 90),
            scale(1.7),
            "bullet",
            { dir: direction, speed: bulletSpeed },
        ]);

        bullet.onUpdate(() => {
            bullet.move(bullet.dir.scale(bullet.speed * (slowMotionActive ? 0.5 : 1)));
            if (bullet.pos.x < 0 || bullet.pos.x > width() || bullet.pos.y < 0 || bullet.pos.y > height()) {
                destroy(bullet);
            }
        });

        bullet.onCollide("enemy", (enemy) => {
            destroy(bullet);
            playExplosion(enemy.pos);
            
            if (enemy.is("tarloNormale")) {
                console.log("TarloNormale hit");
                planet.health -= 7;
                decreaseScore();
            } else {
                console.log("Other enemy hit");
                increaseScore();
            }
            
            destroy(enemy);
        });
        
    }

    function playExplosion(position) {
        const explosion = add([
            sprite("insectExplosion", {
                anim: "explode"
            }),
            pos(position),
            anchor("center"),
            scale(2),
        ]);

        explosion.onAnimEnd(() => {
            destroy(explosion);
        });
    }

    onKeyPress("space", () => {
        shoot();
    });

    // Slow motion function
    function activateSlowMotion() {
        if (score >= 9 && !slowMotionActive) {
            slowMotionActive = true;
            score = 0; //reset le score si slowmotion est active
            updateScoreTracker(score);
            wait(5, () => {
                slowMotionActive = false;
            });
        }
    }

    onKeyPress("s", () => {
        activateSlowMotion();
        play("SlowStart", {
            volume: 0.5, 
        });
    });

    function radiansToDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    function spawnEnemy(spriteName, scaleValue, speedValue) {
        let side = Math.floor(Math.random() * 4);
        let x, y;
    
        switch (side) {
            case 0:
                x = -40;
                y = Math.random() * height();
                break;
            case 1:
                x = Math.random() * width();
                y = -40;
                break;
            case 2:
                x = width() + 40;
                y = Math.random() * height();
                break;
            case 3:
                x = Math.random() * width();
                y = height() + 40;
                break;
        }
    
        const enemy = add([
            sprite(spriteName, { anim: "mouvement" }), 
            pos(vec2(x, y)),
            anchor("center"), 
            rotate(0), 
            "enemy",
            area(),
            scale(scaleValue),
            { speed: speedValue },
        ]);
    
        if (spriteName === "tarloNormale") {
            enemy.addTag("tarloNormale");
        }
    
    //mis à jour de la position de l'ennemie qui va vers le planet centre
    enemy.onUpdate(() => {
        const dir = planet.pos.sub(enemy.pos).unit();
        enemy.move(dir.scale(enemy.speed * (slowMotionActive ? 0.3 : 1)));
        enemy.angle = radiansToDegrees(Math.atan2(dir.y, dir.x)) + 90;
    });
    
        
        enemy.onCollide("planet", () => {
            destroy(enemy);  
            planet.health -= 7; 
            checkPlanetHealth();
            updateHealthBar(planet.health); 
            if (planet.health <= 0) {
                gameOver = true;
                song2Music.stop();
                go("gameOver");
            }
        });
        
        //collision insectes(=ennemies) avec bullet
        enemy.onCollide("bullet", (bullet) => {
            destroy(bullet);
        
            if (enemy.is("tarloNormale")) {
                console.log("TarloNormale hit");
                planet.health -= 7;
                console.log("TARLO HIT");
                decreaseScore();
            } else {
                console.log("Other enemy hit");
                increaseScore();
            }
        
            playExplosion(enemy.pos);
            destroy(enemy); 
        });
             
    }

    function spawnHealingEnemy(spriteName, scaleValue, speedValue) {
        let side = Math.floor(Math.random() * 4);
        let x, y;
    
        switch (side) {
            case 0:
                x = -40;
                y = Math.random() * height();
                break;
            case 1:
                x = Math.random() * width();
                y = -40;
                break;
            case 2:
                x = width() + 40;
                y = Math.random() * height();
                break;
            case 3:
                x = Math.random() * width();
                y = height() + 40;
                break;
        }
    
        const enemy = add([
            sprite(spriteName, { anim: "mouvement" }),
            pos(vec2(x, y)),
            anchor("center"),
            rotate(0),
            "enemy",
            area(),
            scale(scaleValue),
            { speed: speedValue },
        ]);
    
        enemy.onUpdate(() => {
            const dir = planet.pos.sub(enemy.pos).unit();
            enemy.move(dir.scale(enemy.speed * (slowMotionActive ? 0.3 : 1)));
            enemy.angle = radiansToDegrees(Math.atan2(dir.y, dir.x)) + 90;
        });
        enemy.onCollide("bullet", (bullet) => {
            destroy(bullet);
            if (spriteName === "tarloNormale") {
               decreaseScore();  //moins 5 points si tarle autoctone
                planet.health -= 1;  // moins 1 points health planet si tarle autoctone
            } else {
                increaseScore();
            }
            playExplosion(enemy.pos);
            destroy(enemy);
        });
    
        enemy.onCollide("planet", () => {
            if (spriteName === "tarloNormale") {
                planet.health += 20;
                updateHealthBar(planet.health);   // plus 2 points pour les autoctones
            } else {
                planet.health -= 7;  // moins 7 points pour les non autoctones
            }

            checkPlanetHealth();
            updateHealthBar(planet.health); 
            destroy(enemy); 
            if (planet.health <= 0) {
                gameOver = true;
                song2Music.stop();
                go("gameOver");
            }
        });
    }
    
    loop(4, () => { 
        spawnHealingEnemy("tarloNormale", 0.22, 50); 
    });
    
    loop(1.5, () => { //spawn plus frequent
        spawnEnemy("mosquitoTigre", 0.2, 150);  //plus rapide
        spawnEnemy("tarloAsiatico", 0.2, 50); 
    });

    loop(1, () => {
        if (timeLeft > 0) {
            timeLeft -= 1;
        } else if (!gameOver) {
            go("dialogue3");
            song2Music.stop();
        }
    });

    wait(60, () => {
        if (!gameOver) {
            song2Music.stop();
            go("gameOver");
            
        }
    });
});

//DIALOGUE 3
scene("dialogue3", () => {
    const dialogs = [
        "Félicitations pour avoir battu aussi cette vague de Moustique Tigre !",
        "Maintenant, un dernier défi se dresse devant toi.",
        "Prépare-toi à affronter un autre type d'ennemi...",
        "Le prochain insecte est encore plus difficile à combattre.",
        "Il s'agit d'un insecte non indigène qui a déjà fait des dégâts dans d'autres pays comme les États-Unis.",
        "On parle du 'Scarabée japonais' !",
        "Cet insecte doit être combattu car les larves s'attaquent aux racines des pelouses et des prairies, tandis que les adultes détruisent les feuilles, les fleurs et les fruits.",
        "Ils provoquent des pertes importantes dans les cultures agricoles et les jardins.",
        "Contrairement au scarabée que l'on trouve habituellement, il est brunâtre avec quelques parties vertes. ",
        "Ici aussi, c'est l'homme qui l'a importé, par exemple avec l'arrivée de plantes exotiques.",
        "Il est également capable de causer de graves dommages à l'environnement.",
        "Souviens-toi, tu peux toujours utiliser le slow motion pour te donner un avantage.",
        "Maintenant, il est temps de passer à la prochaine et dernière bataille.",
        "J'ai désormais une immense confiance en toi!",
        "Appuie sur la barre d'espace pour le NIVEAU TROIS et prouver ta valeur !",
    ];

    playMusic();

    let curDialog = 0;

    //background image pour les dialogues
    const bg = add([
        sprite("grassBackgroundDialogue"),
        pos(0, 0),
        fixed(),
    ]);

    // dimensions pou calculer le scale
    bg.scale = vec2(width() / bg.width, height() / bg.height);

    // carré pour le txt du dialogue
    const textbox = add([
        rect(width() - 200, 120, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(4),
        color(255, 255, 255),  
    
    ]);

    // Texte dialogue
    const txt = add([
        text("", { size: 32, width: width() - 230, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ]);

    
    const planetParle = add([
        sprite("planetParle"),  
        scale(2),  
        anchor("center"),
        pos(center().sub(0, 50)),  
    ]);


    const planetContent = add([
        sprite("planetContent"),  
        scale(1),  
        anchor("center"),
        pos(center().sub(0, 50)),  
        { visible: true }, 
    ]);

    // fonction mis à jour dialogue
    function updateDialog() {
        txt.text = dialogs[curDialog];

        // montre "planetContent" juste au début puis il est caché
        if (curDialog === 0) {
            planetContent.hidden = false;
            planetParle.hidden = true;
        } else {
            planetContent.hidden = true;
            planetParle.hidden = false;
        }
    }

    // avec tab il passe aux prochain dialogue
    onKeyPress("space", () => {
        curDialog++;
        if (curDialog < dialogs.length) {
            updateDialog();
        } else {
            go("scene3");
            stopMusic(); 
        }
    });
    // commence avec dialogue
    updateDialog();
});

// SCENE 3 - level 3
scene("scene3", () => {
    let score = 0;
    let slowMotionActive = false;
    let gameOver = false;
    let timeLeft = 60; 

    const song3Music = play("song3", {
        volume: 0.7,
        loop: true,
    });

    // BACKGROUND
    add([
        sprite("grassBackground"),
        pos(0, 0),
        scale(width() / 300, height() / 200),
        fixed(),
    ]);


// HEALTH BAR
const healthBar = add([
    sprite("healthBar", { frame: 0 }), 
    pos(10, 10), 
    anchor("topleft"), 
    scale(1.5 ), 
    fixed(),
    "healthBar",
]);

    // timer sur l'écran
    const timerLabel = add([
        text(`Time left: ${timeLeft}`, {
            font: "calibri",
            size: 20,
        }),
        pos(width() - 100, height() - 50),
        anchor("center"),
        z(50),
        {
            update() {
                this.text = `Time left: ${timeLeft}`;
            },
        },
    ]);

    const planet = add([
        sprite("planetCentre1", {
            anim: "PlanetRotation",
        }),
        pos(width() / 2, height() / 2),
        rotate(0),
        anchor("center"),
        area(),
        "planet", 
        {
            health: 100,
        },
    ]);

//SCORE 
const scoreTracker = add([
    sprite("pointsCircle", { frame: 0 }), 
    pos(planet.pos.x, planet.pos.y), 
    anchor("center"), 
    scale(3.5),
    fixed(),
    "scoreTracker",
]);
 //HEALT
    function checkPlanetHealth() {

        if (planet.health > 100) {
            planet.health = 100;
        }

        if (planet.health < 20) {
            planet.use(sprite("planetCentre5", {
                anim: "PlanetRotation",
            }));
        } else if (planet.health < 40) {
            planet.use(sprite("planetCentre4", {
                anim: "PlanetRotation",
            }));
        } else if (planet.health < 60) {
            planet.use(sprite("planetCentre3", {
                anim: "PlanetRotation",
            }));
        } else if (planet.health < 80) {
            planet.use(sprite("planetCentre2", {
                anim: "PlanetRotation",
            }));
        } else {
            planet.use(sprite("planetCentre1", {
                anim: "PlanetRotation",
            }));
        }
        updateHealthBar(planet.health);
    }

    function updateHealthBar(health) {
        let frame = 0;
    
        if (health > 90) {
            frame = 0;
        } else if (health > 80) {
            frame = 1;
        } else if (health > 70) {
            frame = 2;
        } else if (health > 60) {
            frame = 3;
        } else if (health > 50) {
            frame = 4;
        } else if (health > 40) {
            frame = 5;
        } else if (health > 30) {
            frame = 6;
        } else if (health > 20) {
            frame = 7;
        } else if (health > 10) {
            frame = 8;
        } else {
            frame = 9;
        }
    
        healthBar.frame = frame;
    }    

    function increaseScore() {
        score += 0.5;
        if (score >10) {score = 10}
        updateScoreTracker();
        console.log(`Increasing score. Current score: ${score}`);
    }
    
    function decreaseScore() {
        score -= 2.5;
        if (score <0){score =0}
        updateScoreTracker();
        planet.health -= 9;
        updateHealthBar(planet.health);
        console.log(`Decreasing score. Current score: ${score}`);
        console.log(`Decreasing Healt!: ${planet.health}`);
    }

    function updateScoreTracker() {
        const maxFrames = 10; 
        let frame = Math.floor(score);
    
        if (frame >= maxFrames) {
            frame = maxFrames - 1;
        } else if (frame < 0) { // assure que ne va pas au dessous du 0
            frame = 0;
        }
    
        scoreTracker.frame = frame;  // mis à jour score qui choisit le frame de la barre
        console.log(`Updating score tracker. Score: ${score}, Frame: ${frame}`);
    }
     
     // Collision entre planet and ennemies
     planet.onCollide("enemy", (enemy) => {
        if (enemy.is("tarloNormale")) {
            planet.health += 2;
        } else {
            planet.health -= 7;
        }
    
        updateHealthBar(planet.health);// mis à jour barre healt planet
    
        destroy(enemy);

        if (planet.health <= 0) {
            song3Music.stop();
            go("gameOver");
        }
    });
    

    // Cannon
    const cannon = add([
        sprite("cannon1"),
        pos(planet.pos.x, planet.pos.y),
        anchor("center"),
        scale(1.5, 2.5),
        rotate(0),
        area(),
        "cannon",
    ]);

    cannon.onUpdate(() => {
        const mousePosition = mousePos();
        const direction = mousePosition.sub(planet.pos);
        const angle = Math.atan2(direction.y, direction.x);

        const offsetDistance = 70;
        const distanceToMouse = direction.len();

        if (distanceToMouse > 30) {
            cannon.angle = angle * (180 / Math.PI);

            const offset = vec2(Math.cos(angle), Math.sin(angle)).scale(offsetDistance);
            cannon.pos = planet.pos.add(offset);
        }
    }); 

    function shoot() {
        const bulletSpeed = 300;
        const angle = deg2rad(cannon.angle);
        const direction = vec2(Math.cos(angle), Math.sin(angle));
        play("shootCannon", {
            volume: 0.5, 
        });
        const bulletStartPos = cannon.pos.add(direction.scale(cannon.height / 2));

        const bullet = add([
            sprite("bullet1"),
            area(),
            pos(bulletStartPos),
            anchor("center"),
            rotate(cannon.angle + 90),
            scale(1.7),
            "bullet",
            { dir: direction, speed: bulletSpeed },
        ]);

        bullet.onUpdate(() => {
            bullet.move(bullet.dir.scale(bullet.speed * (slowMotionActive ? 0.5 : 1)));
            if (bullet.pos.x < 0 || bullet.pos.x > width() || bullet.pos.y < 0 || bullet.pos.y > height()) {
                destroy(bullet);
            }
        });

        bullet.onCollide("enemy", (enemy) => {
            destroy(bullet);
            playExplosion(enemy.pos);
            
            if (enemy.is("tarloNormale")) {
                console.log("TarloNormale hit");
                planet.health -= 7;
                decreaseScore();
            } else {
                console.log("Other enemy hit");
                increaseScore(); 
            }
            
            destroy(enemy); 
        });
        
    }

    function playExplosion(position) {
        const explosion = add([
            sprite("insectExplosion", {
                anim: "explode"
            }),
            pos(position),
            anchor("center"),
            scale(2),
        ]);

        explosion.onAnimEnd(() => {
            destroy(explosion);
        });
    }

    onKeyPress("space", () => {
        shoot();
    });

    // Slow motion function
    function activateSlowMotion() {
        if (score >= 9 && !slowMotionActive) {
            slowMotionActive = true;
            score = 0; // Reset le score si slow motion est active
            updateScoreTracker(score);
            wait(5, () => {
                slowMotionActive = false;
            });
        }
    }

    onKeyPress("s", () => {
        activateSlowMotion();
        play("SlowStart", {
            volume: 0.5, 
        });
    });

    function radiansToDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    function spawnEnemy(spriteName, scaleValue, speedValue) {
        let side = Math.floor(Math.random() * 4);
        let x, y;
    
        switch (side) {
            case 0:
                x = -40;
                y = Math.random() * height();
                break;
            case 1:
                x = Math.random() * width();
                y = -40;
                break;
            case 2:
                x = width() + 40;
                y = Math.random() * height();
                break;
            case 3:
                x = Math.random() * width();
                y = height() + 40;
                break;
        }
    
        const enemy = add([
            sprite(spriteName, { anim: "mouvement" }), 
            pos(vec2(x, y)),
            anchor("center"), 
            rotate(0), 
            "enemy",
            area(),
            scale(scaleValue),
            { speed: speedValue },
        ]);
    
        if (spriteName === "tarloNormale") {
            enemy.addTag("tarloNormale"); //tag pour mieux gerer les insectes/ennemies
        }
    
        enemy.onUpdate(() => {
            const dir = planet.pos.sub(enemy.pos).unit();
            enemy.move(dir.scale(enemy.speed * (slowMotionActive ? 0.5 : 1)));
            enemy.angle = radiansToDegrees(Math.atan2(dir.y, dir.x)) + 90;
        });
    
        
        enemy.onCollide("planet", () => {
            destroy(enemy);  
            planet.health -= 7; 
            checkPlanetHealth();
            updateHealthBar(planet.health); 
            if (planet.health <= 0) {
                gameOver = true;
                song3Music.stop();
                go("gameOver");
            }
        });
        
        enemy.onCollide("bullet", (bullet) => {
            destroy(bullet);
        
            if (enemy.is("tarloNormale")) {
                console.log("TarloNormale hit");
                planet.health -= 7;
                console.log("TARLO HIT");
                decreaseScore();  
            } else {
                console.log("Other enemy hit");
                increaseScore();
            }
        
            playExplosion(enemy.pos);  
            destroy(enemy);  
        });
             
    }

    function spawnHealingEnemy(spriteName, scaleValue, speedValue) {
        let side = Math.floor(Math.random() * 4);
        let x, y;
    
        switch (side) {
            case 0:
                x = -40;
                y = Math.random() * height();
                break;
            case 1:
                x = Math.random() * width();
                y = -40;
                break;
            case 2:
                x = width() + 40;
                y = Math.random() * height();
                break;
            case 3:
                x = Math.random() * width();
                y = height() + 40;
                break;
        }
    
        const enemy = add([
            sprite(spriteName, { anim: "mouvement" }),
            pos(vec2(x, y)),
            anchor("center"),
            rotate(0),
            "enemy",
            area(),
            scale(scaleValue),
            { speed: speedValue },
        ]);
    
        enemy.onUpdate(() => {
            const dir = planet.pos.sub(enemy.pos).unit();
            enemy.move(dir.scale(enemy.speed * (slowMotionActive ? 0.5 : 1)));
            enemy.angle = radiansToDegrees(Math.atan2(dir.y, dir.x)) + 90;
        });
        
        enemy.onCollide("bullet", (bullet) => {
            destroy(bullet);
            if (spriteName === "tarloNormale"|| spriteName === "scarabeeNormale") {
               decreaseScore();  // moins 5 poins si insect autoctone
                planet.health -= 1;  // moins 1 point health si insect autoctone
            } else {
                increaseScore();
            }
            playExplosion(enemy.pos);
            destroy(enemy);  
        });
    
        enemy.onCollide("planet", () => {
            if (spriteName === "tarloNormale"|| spriteName === "scarabeeNormale") {
                planet.health += 20;
                updateHealthBar(planet.health);   // ajoute 2 points healt planet si est l'insect autoctone
            } else {
                planet.health -= 7;  // enlève 7 points autres ennemies
            }

            checkPlanetHealth();
            updateHealthBar(planet.health); 
            destroy(enemy);  
            if (planet.health <= 0) {
                gameOver = true; 
                song3Music.stop();
                go("gameOver");
                
            }
        });
    }
    
    
    loop(4, () => { //spawn tarle et scarabee
        spawnHealingEnemy("tarloNormale", 0.22, 50); // Velocità ridotta per il tarloNormale
        spawnHealingEnemy("scarabeeNormale", 0.2, 90); // Scarabee normale, velocità media
    });
    
    loop(1.5, () => {//spawn autre insectes
        spawnEnemy("mosquitoTigre", 0.2, 150);  // plus vite
        spawnEnemy("scarabeeJaponais", 0.2, 80);
        spawnEnemy("tarloAsiatico", 0.2, 50); 
    });
    
    // Timer countdown
    loop(1, () => {
        if (timeLeft > 0) {
            timeLeft -= 1;
        } else if (!gameOver) {
            go("VictoryScene");
            song3Music.stop();
            
        }
    });

    // Transition to gameOver après le temps
    wait(60, () => {
        if (!gameOver) {
            song3Music.stop();
            go("gameOver");
        }
    });
});

// SCENE GAMEOVER
scene("gameOver", () => {

    add([
        rect(width(), height()), 
        pos(0, 0),  
        color(0, 0, 0), 
    ]);

    
    const gameOverSprite = add([
        sprite("gameOverImg"), 
        pos(center()),  
        anchor("center"),  
        scale(1),  
    ]);

    
    gameOverSprite.play("gameOverAnim");

    
    onKeyPress("space", () => {
        go("accueil");
    });
});

go("accueil");

//SCENE VICTORY/WIN
scene("VictoryScene", () => {

    add([
        rect(width(), height()), 
        pos(0, 0),  
        color(0, 0, 0), 
    ]);

    
    const VictorySprite = add([
        sprite("VictorySprite"), 
        pos(center()),  
        anchor("center"),  
        scale(1),  
    ]);
    VictorySprite.scale = vec2(width() / VictorySprite.width, height() / VictorySprite.height); //resize du sprite
    VictorySprite.play("VictorySpriteAnim") //animation avec le texte

    
    onKeyPress("space", () => {
        go("accueil");
    });
});

go("accueil");
