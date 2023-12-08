
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

//% color=#696969 weight=400 icon="\uf018" block=みちをつくる
namespace road {
    let roadAnswerCheckList: number[] = [];

    //% blockId=makeLigthPaint
    //% block="みぎのてんせんをつくる"
    //% block.shadow=minecraftBlocks
    export function makeLigthPaint(){
        agent.teleport(world(-2713, 65, -124), WEST)
        agent.move(FORWARD, 3)

        agent.setItem(QUARTZ_SLAB, 64, 1)
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
    //% block="ひだりのてんせんをつくる"
    //% block.shadow=minecraftBlocks
    export function makeLeftPaint(){
        agent.teleport(world(-2713, 65, -132), WEST)
        agent.move(FORWARD, 3)
        agent.setItem(QUARTZ_SLAB, 64, 1)
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
    //% block="まんなかのせんをつくる"
    //% block.shadow=minecraftBlocks
    export function makeMiddlePaint() {
        agent.teleport(world(-2713, 65, -128), WEST)
        agent.setItem(QUARTZ_SLAB, 64, 1)
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
    export function reset() {
        player.execute(
            "/fill -2713 64 -135 -2763 68 -121 air"
        )

        roadAnswerCheckList = [];
    }

    function roadAnswerCheck() {
        if (roadAnswerCheckList.length !== 4) return;

        const answer = [1, 2, 3, 4];

        if (roadAnswerCheckList[0] !== 1) {
            player.execute("dialogue open @e[type=npc,tag=tutorial,c=1] @a scene_tutorial_CT34");
            roadAnswerCheckList = [];
            return;
        }

        const roadAnswerCheckListSorted = roadAnswerCheckList.sort();

        for (let i = 0; i < answer.length; i++) {
            if (answer[i] !== roadAnswerCheckListSorted[i]) {
                player.execute("dialogue open @e[type=npc,tag=tutorial,c=1] @a scene_tutorial_CT34");
                roadAnswerCheckList = [];
                return;
            }
        }

        roadAnswerCheckList = [];

        // とりあえず仮(本番はダイアログ)
        player.execute("function tutorial/chapter3/exit");
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
        resetArray();
        agentTp();
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
        resetArray();
        agentTp();
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
        resetArray();
        agentTp();
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
        resetArray();
        agentTp();
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
        resetArray();
        agentTp();
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
        resetArray();
        agentTp();
        agent.setSlot(1);
        buildingCarWheel();

        checkList.push(5);

        answerCheck();
    }

    function buildingCarBottom(value: number) {
        const agentDirection = agent.getOrientation();
        const agentDirectionXYZ = CarUtil.getAgentDirection();

        let structureDirection = 0;

        switch(agentDirection){
            case -180:
                agentDirectionXYZ.z -= 9;
                structureDirection = 90;
                break;
            case -90:
                agentDirectionXYZ.x += 1;
                structureDirection = 180;
                break
            case 90:
                agentDirectionXYZ.x -= 9;
                structureDirection = 0;
                break;
            case 0:
                agentDirectionXYZ.z += 1;
                structureDirection = 270;
                break;
        }

        player.execute(`structure load car_bottom ${agentDirectionXYZ.x} ${agentDirectionXYZ.y} ${agentDirectionXYZ.z} ${structureDirection}_degrees`)
    }

    function buildingCarBody(value: number) {

    }

    function buildingCarUp(value: halfBlocks) {

    }

    function buildingCarGlass() {
        agent.setItem(GLASS, 64, 1)

    }

    function buildingCarWheel() {
        agent.setItem(BLACK_CONCRETE, 64, 1)

    }

    function buildingCarDoor() {
        agent.setItem(IRON_DOOR, 64, 1)

    }

    function answerCheck() {
        if (checkList.length !== 6) return;

        const answerList = [1, 2, 3, 4, 5, 6];

        for (let i = 0; i < answerList.length; i++) {
            if (answerList[i] !== checkList[i]) {
                player.execute("dialogue open @e[type=npc,tag=tutorial,c=1] @a scene_tutorial_CT413");
                checkList = [];
                return;
            }
        }

        checkList = [];

        // 正解処理
        player.execute('scoreboard players add @p phase 1');
    }

    function agentTp(){
        if(checkList.length !== 0) return;

        const agentDirection = CarUtil.getPlayerDirection();

        switch(agentDirection){
            case NORTH:
                agent.teleport(pos(0, 0, -2), agentDirection);
                break;
            case SOUTH:
                agent.teleport(pos(0, 0, 2), agentDirection);
                break;
            case EAST:
                agent.teleport(pos(2, 0, 0), agentDirection);
                break;
            case WEST:
                agent.teleport(pos(-2, 0, 0), agentDirection);
                break;
        }
    }

    function resetArray() {
        if (checkList.length === 6) checkList = [];
    }
}

class CarUtil{
    /**
     * プレイヤーの向いている方向を4方向で取得
     */
    public static getPlayerDirection(): CompassDirection{
        const orientation = player.getOrientation();

        if (orientation < -135 || orientation > 135) return NORTH;
        else if (orientation < -45) return EAST;
        else if (orientation < 45) return SOUTH;
        else if (orientation < 135) return WEST;

        return NORTH;
    }

    /**
     * エージェントの向いている座標をx,y,zそれぞれで取得
     */
    public static getAgentDirection(): {x: number, y: number, z: number} {
        const agentDirection = agent.getPosition()
        const agentDirectionString = agentDirection.toString().split(" ");
        const agentDirectionXYZ = agentDirectionString.map(dir => {
            return parseInt(dir, 10);
        });

        return {x: agentDirectionXYZ[0], y: agentDirectionXYZ[1], z: agentDirectionXYZ[2]};
    }

}