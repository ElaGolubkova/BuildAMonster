class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        //Smile
        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 30;

        //Arm
        this.leftArmX = this.bodyX - 105;
        this.leftArmY = this.bodyY + 85;

        this.rightArmX = this.bodyX + 105;
        this.rightArmY = this.bodyY + 85;

        //Legs
        this.leftLegX = this.bodyX - 40;
        this.leftLegY = this.bodyY + 125;

        this.rightLegX = this.bodyX + 40;
        this.rightLegY = this.bodyY + 125;

        //Eyes
        this.leftEyeX = this.bodyX - 40;
        this.leftEyeY = this.bodyY - 30;

        this.rightEyeX = this.bodyX + 40;
        this.rightEyeY = this.bodyY - 30;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueF.png");

        // Create the two sprites, one for each type of smile
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthB.png");
        my.sprite.fangs.visible = false;

        //Create sprites for Arms
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm.flipX = true;

        //Create sprites for Legs
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_blueC.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_blueC.png");
        my.sprite.leftLeg.flipX = true;

        //Create sprites for Eyes
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_cute_light.png");
        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_cute_light.png");
        my.sprite.leftEye.flipX = true;

        //Scale Eyes (if needed)
        // my.sprite.leftEye.setScale(0.7);
        // my.sprite.rightEye.setScale(0.7);


        // "Event input:smile"
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        sKey.on('down', (key, event) => {
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
	    });

        // "Event input: fangs"
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        fKey.on('down', (key, event) => {
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
	    });

        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        const speed = 2;

        //Make the character move right while pressing "D"
        if (this.dKey.isDown) {
            my.sprite.body.x += speed;
            my.sprite.smile.x += speed;
            my.sprite.fangs.x += speed;
            my.sprite.rightArm.x += speed;
            my.sprite.leftArm.x += speed;
            my.sprite.rightLeg.x += speed;
            my.sprite.leftLeg.x += speed;
            my.sprite.rightEye.x += speed;
            my.sprite.leftEye.x += speed;
        }

        ////Make the character move left while pressing "A"
        if (this.aKey.isDown) {
            my.sprite.body.x -= speed;
            my.sprite.smile.x -= speed;
            my.sprite.fangs.x -= speed;
            my.sprite.rightArm.x -= speed;
            my.sprite.leftArm.x -= speed;
            my.sprite.rightLeg.x -= speed;
            my.sprite.leftLeg.x -= speed;
            my.sprite.rightEye.x -= speed;
            my.sprite.leftEye.x -= speed;
        }
    }

}