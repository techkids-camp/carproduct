
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum halfBlocks {
    //% block="なめらかないし"
    SMOOTH_STONE = 43,
    //% block="いし"
    STONE = 131978,
    //% block="まるいし"
    COLLABLE_STONE = 196652,
    //% block="オークの木"
    OAK = 158,
    //% block="トウヒの木"
    SPRUCE = 65694,
    //% block="しらかばの木"
    BIRCH = 131230,
    //% block="ジャングルの木"
    JUNGLE = 196766,
    //% block="アカシアの木"
    ACACIA = 262302,
    //% block="ダークオークの木"
    DARK_OAK = 327838,
    //% block="マングローブの木"
    MANGROVE = 839,
    //% block="さくらの木"
    CHERRY = 928,
    //% block="たけの木"
    BAMBOO = 912
}
enum paintblocks{
    //% block="クォーツのハーフブロック"
    STONE_SLAB = 393260
}

//% color=#696969 weight=400 icon="\uf018" block=みちをつくる
namespace road {
    let roadAnswerCheckList: number[] = [];

    //% blockId=makeLigthPaint
    //% block="みぎのまんなかのてんせんを $block でつくる"
    //% block.shadow=minecraftBlocks
    export function makeLigthPaint(block:paintblocks){
        agent.teleport(world(-2713, 65, -124), WEST)
        agent.move(FORWARD, 3)
        agent.setItem(block, 64, 1)
        for (let index = 0; index < 5; index++) {
            for (let index = 0; index < 5; index++) {
                agent.destroy(DOWN)
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.move(FORWARD, 5)
        }

        roadAnswerCheckList.push(2);
        roadAnswerCheck()
    }
    //% blockId=makeLeftPaint
    //% block="ひだりのまんなかのてんせんを $block でつくる"
    //% block.shadow=minecraftBlocks
    export function makeLeftPaint(block:paintblocks){
        agent.teleport(world(-2713, 65, -132), WEST)
        agent.move(FORWARD, 3)
        agent.setItem(block, 64, 1)
        for (let index = 0; index < 5; index++) {
            for (let index = 0; index < 5; index++) {
                agent.destroy(DOWN)
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.move(FORWARD, 5)
        }

        roadAnswerCheckList.push(3);
        roadAnswerCheck()
    }
    //% blockId=makeMiddlePaint
    //% block="まんなかのせんを $block でつくる"
    //% block.shadow=minecraftBlocks
    export function makeMiddlePaint(block: paintblocks) {
        agent.teleport(world(-2713, 65, -128), WEST)
        agent.setItem(block, 64, 1)
        for (let index = 0; index < 51; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }

        roadAnswerCheckList.push(4);
        roadAnswerCheck()
    }
    //% blockId=makeroad
    //% block="どうろをいしでつくる"
    //% block.shadow=minecraftBlock
    export function makeroad() {
        player.execute(
            "/fill -2713 64 -135 -2763 64 -121 stone_block_slab4 2"
        )

        roadAnswerCheckList.push(1);
        roadAnswerCheck()
    }
    //% blokId=reset
    //% block="さいしょにもどす"
    export function reset(){
        player.execute(
            "/fill -2713 64 -135 -2763 68 -121 air"
        )

        roadAnswerCheckList = [];
    }

    function roadAnswerCheck() {
        if (roadAnswerCheckList.length !== 4) return;

        const answer = [1, 2, 3, 4];

        if (roadAnswerCheckList[0] !== 1){
            player.say("プログラムがちがうよ！(本番はダイアログ)");
            roadAnswerCheckList = [];
            return;
        }

        const roadAnswerCheckListSorted = roadAnswerCheckList.sort();

        for (let i = 0; i < answer.length; i++){
            if (answer[i] !== roadAnswerCheckListSorted[i]) {
                player.say("プログラムがちがうよ！(本番はダイアログ)");
                roadAnswerCheckList = [];
                return;
            }
        }

        roadAnswerCheckList = [];

        // とりあえず仮(本番はダイアログ)
        player.say("せいかい！(本番はダイアログ)");
    }
}

/**
 * Custom blocks
 */
//% color=#B40404 weight=400 icon="\uf1b9" block=くるまをつくる
namespace custom {
    let checkList: number[] = [];

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% blockID=makeCircle
    //% block="しゃたい(下)を $myBlock でつくる"
    export function makeBottomBody(myBlock: halfBlocks) {
        agent.setSlot(1)
        agent.setItem(myBlock, 64, 1);
        buildingCarBottom(myBlock);

        checkList.push(1);

        answerCheck();
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% blockID=makeCircle
    //% block="しゃたいを $myBlock でつくる"
    //% myBlock.shadow=minecraftBlock
    export function makeBody(myBlock: number) {
        agent.setSlot(1)
        agent.setItem(myBlock, 64, 1);
        buildingCarBody(myBlock);

        checkList.push(2);

        answerCheck();
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 1
     */
    //% blockID=makeCircle
    //% block="しゃたい(上)を $myBlock でつくる"
    export function makeUpBody(myBlock: halfBlocks) {
        agent.setSlot(1);
        agent.setItem(myBlock, 64, 1);
        buildingCarUp(myBlock);

        checkList.push(3);

        answerCheck();
    }

    /**
     * TODO: describe your function here
     */
    //% blockID=makeCircle
    //% block="まどガラスをつくる"
    export function makeGlass() {
        agent.setSlot(1);
        buildingCarGlass();

        checkList.push(4);

        answerCheck();
    }

    /**
     * TODO: describe your function here
     */
    //% blockID=makeCircle
    //% block="ドアをつくる"
    export function makeDoor() {
        agent.setSlot(1);
        buildingCarDoor();

        checkList.push(6);

        answerCheck();
    }

    /**
     * TODO: describe your function here
     */
    //% blockID=makeCircle
    //% block="タイヤをつくる"
    export function makeWheel() {
        agent.setSlot(1);
        buildingCarWheel();

        checkList.push(5);

        answerCheck();
    }

    function buildingCarBottom(value: number){
        agent.setItem(STONE, 64, 2)
        for (let index = 0; index < 9; index++) {
            for (let index = 0; index < 4; index++) {
                agent.destroy(DOWN)
                agent.move(RIGHT, 1)
            }
            agent.move(FORWARD, 1)
            agent.move(LEFT, 4)
        }
        agent.move(BACK, 1)
        agent.move(DOWN, 1)
        agent.move(LEFT, 4)
        for (let index = 0; index < 9; index++) {
            for (let index = 0; index < 3; index++) {
                agent.move(UP, 1)
                agent.setSlot(2)
                agent.place(UP)
                agent.move(DOWN, 1)
                agent.setSlot(1)
                agent.place(UP)
                agent.move(RIGHT, 1)
            }
            agent.move(UP, 1)
            agent.setSlot(2)
            agent.place(UP)
            agent.move(DOWN, 1)
            agent.setSlot(1)
            agent.place(UP)
            agent.move(BACK, 1)
            agent.move(LEFT, 3)
        }
        agent.destroy(BACK)
        agent.move(FORWARD, 7)
        agent.setItem(DIRT, 64, 2)
        agent.setSlot(2)
        for (let index = 0; index < 8; index++) {
            for (let index = 0; index < 3; index++) {
                agent.place(FORWARD)
                agent.move(RIGHT, 1)
            }
            agent.place(FORWARD)
            agent.move(BACK, 1)
            agent.move(LEFT, 3)
        }
        agent.move(RIGHT, 2)
        agent.place(RIGHT)
        agent.move(LEFT, 1)
        agent.place(RIGHT)
        agent.move(LEFT, 1)
        agent.place(RIGHT)
        agent.move(BACK, 1)
        agent.place(FORWARD)
        agent.move(UP, 1)
        agent.place(DOWN)
        agent.move(UP, 1)
        for (let index = 0; index < 9; index++) {
            for (let index = 0; index < 3; index++) {
                agent.destroy(FORWARD)
                agent.move(RIGHT, 1)
            }
            agent.destroy(FORWARD)
            agent.move(FORWARD, 1)
            agent.move(LEFT, 3)
        }
        agent.move(BACK, 1)
        agent.destroy(DOWN)
        agent.move(RIGHT, 3)
        agent.destroy(DOWN)
        agent.move(BACK, 6)
        agent.destroy(DOWN)
        agent.move(LEFT, 3)
        agent.destroy(DOWN)
    }

    function buildingCarBody(value: number){
        const ableBuild: number[][][] = [
            [
                [1, 1, 1, 1],
                [1, 0, 0, 1],
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [1, 0, 0, 1],
                [1, 1, 1, 1],
                [1, 1, 1, 1],
            ],
            [
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [1, 0, 0, 1],
            ]
        ]

        agent.move(FORWARD, 6);
        ableBuild.forEach((oneL, i) => {
            oneL.forEach((oneL2, j) => {
                oneL2.forEach((one, k) => {
                    if (one === 1) agent.place(FORWARD);
                    agent.move(RIGHT, 1);
                })
                agent.move(BACK, 1);
                agent.move(LEFT, 4);
            });
            agent.move(UP, 1);
            agent.move(FORWARD, 9);
        })
    }

    function buildingCarUp(value: halfBlocks){
        agent.move(BACK, 2);
        for(let i = 0; i < 6; i++){
            for (let j = 0; j < 4; j++){
                agent.place(FORWARD);
                agent.move(RIGHT, 1);
            }
            agent.move(BACK, 1);
            agent.move(LEFT, 4);
        }

        agent.move(BACK, 2);
        agent.move(DOWN, 2);

        agent.setItem(FRAME, 64, 2)
        agent.setItem(LADDER, 64, 3)

        agent.setSlot(2);
        agent.place(FORWARD);

        agent.setSlot(3);
        agent.move(RIGHT, 1);
        agent.place(FORWARD);
        agent.move(RIGHT, 1);
        agent.place(FORWARD);
        agent.move(RIGHT, 1);

        agent.setSlot(2);
        agent.place(FORWARD);

        agent.move(UP, 3);

        agent.move(FORWARD, 10);
        agent.turn(LEFT);
        agent.turn(LEFT);
        agent.move(DOWN, 3);

        agent.place(FORWARD);
        agent.move(RIGHT, 3);
        agent.place(FORWARD);
    }

    function buildingCarGlass(){
        agent.setItem(GLASS, 64, 1)
        agent.move(LEFT, 1)
        agent.move(UP, 1)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.place(FORWARD)
        agent.move(LEFT, 2)
        agent.move(FORWARD, 2)
        agent.place(RIGHT)
        agent.move(FORWARD, 6)
        agent.move(RIGHT, 2)
        agent.place(BACK)
        agent.move(RIGHT, 1)
        agent.place(BACK)
        agent.move(RIGHT, 2)
        agent.move(BACK, 6)
        agent.place(LEFT)
    }

    function buildingCarWheel(){
        agent.setItem(BLACK_CONCRETE, 64, 1)
        agent.move(DOWN, 2)
        agent.place(LEFT)
        agent.move(FORWARD, 6)
        agent.place(LEFT)
        agent.move(UP, 2)
        agent.move(LEFT, 5)
        agent.move(DOWN, 2)
        agent.place(RIGHT)
        agent.move(BACK, 6)
        agent.place(RIGHT)
    }

    function buildingCarDoor(){
        agent.setItem(IRON_DOOR, 64, 1)
        agent.move(FORWARD, 2)
        agent.move(UP, 1)
        agent.turn(RIGHT_TURN)
        agent.place(FORWARD)
        agent.move(LEFT, 2)
        agent.place(FORWARD)
        agent.move(UP, 3)
        agent.move(FORWARD, 5)
        agent.move(DOWN, 3)
        agent.turn(RIGHT_TURN)
        agent.turn(RIGHT_TURN)
        agent.place(FORWARD)
        agent.move(LEFT, 2)
        agent.place(FORWARD)
    }

    function answerCheck(){
        if(checkList.length !== 6) return;

        const answerList = [1,2,3,4,5,6];
        
        for(let i = 0; i < answerList.length; i++){
            if(answerList[i] !== checkList[i]){
                // とりあえず仮(本番はダイアログ)
                player.say("プログラムがちがうよ！");
                checkList = [];
                return;
            }
        }

        checkList = [];

        // 正解処理
        player.execute('scoreboard players add "くるまのかず" car 1');
    }
}