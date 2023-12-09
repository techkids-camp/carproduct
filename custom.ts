
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum halfBlocks {
    //% block="なめらかないし"
    SMOOTH_STONE = 43,
    //% block="いし"
    STONE = 131978,
    //% block="さがん"
    SAND_STONE = 65580,
    //% block="あかいさがん"
    RED_SAND_STONE = 182,
    //% block="まるいし"
    COLLABLE_STONE = 196652,
    //% block="レンガ"
    BRICK = 262188,
    //% block="いしのレンガ"
    STONE_BRICK = 327724,
    //% block="クオーツ"
    QUARTZ = 393260,
    //% block="ネザーレンガ"
    NETHER_BRICK = 458796,
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
    BAMBOO = 916,
    //% block="プルパァ"
    PURPUR = 65718,
    //% block="プリズマリン"
    PRISMARINE = 131254,
    //% block="ダークプリズマリン"
    DARK_PRISMARINE = 196790,
    //% block="プリズマリンのレンガ"
    PRISMARINE_BRICK = 262326
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
        const { structurePos, structureDirection } = CarUtil.getWillLoadStructureData();

        player.execute(`structure load car_bottom ${structurePos.x} ${structurePos.y} ${structurePos.z} ${structureDirection}_degrees`);

        const carCoord = CarUtil.getCarCoord(1);

        const commandHalfBlock = CarUtil.getCommandHalfBlock(value);

        const startX = carCoord.startPos.x;
        const startY = carCoord.startPos.y;
        const startZ = carCoord.startPos.z;

        const endX = carCoord.endPos.x;
        const endY = carCoord.endPos.y;
        const endZ = carCoord.endPos.z;

        player.execute(`fill ${startX} ${startY} ${startZ} ${endX} ${endY} ${endZ} ${commandHalfBlock} replace stone_block_slab`);
    }

    function buildingCarBody(value: number) {
        agent.move(UP, 1);
        agent.move(BACK, 1);
        const { structurePos, structureDirection } = CarUtil.getWillLoadStructureData();

        player.execute(`structure load car_middle ${structurePos.x} ${structurePos.y} ${structurePos.z} ${structureDirection}_degrees`);
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

type Coord = {
    x: number,
    y: number,
    z: number
}

type CoordRange = {
    startPos: Coord,
    endPos: Coord
}

type StructureData = {
    structurePos: Coord,
    structureDirection: number
}

class CarUtil{
    /**
     * プレイヤーの向いている方向を4方向で取得
     * @returns 方向
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
     * @returns xyz座標
     */
    private static getAgentDirection(): Coord {
        const agentDirection = agent.getPosition()
        const agentDirectionString = agentDirection.toString().split(" ");
        const agentDirectionXYZ = agentDirectionString.map(dir => {
            return parseInt(dir, 10);
        });

        return {x: agentDirectionXYZ[0], y: agentDirectionXYZ[1], z: agentDirectionXYZ[2]};
    }

    /**
     * 車の範囲を取得する
     * @param height 高さをどこまでとるか
     */
    public static getCarCoord(height: number): CoordRange {
        const startPos: Coord = this.getAgentDirection();

        const agentDirection = agent.getOrientation();

        const endPos: Coord = {x: 0, y: 0, z: 0};

        switch(agentDirection){
            case -180:
                endPos.x = startPos.x + 3;
                endPos.z = startPos.z - 9;
                break;
            case -90:
                endPos.x = startPos.x + 9;
                endPos.z = startPos.z + 3;
                break;
            case 90:
                endPos.x = startPos.x - 9;
                endPos.z = startPos.z + 3;
                break;
            case 0:
                endPos.x = startPos.x + 3;
                endPos.z = startPos.z + 9;
                break;
        }

        return {
            startPos: startPos,
            endPos: endPos
        };
    }

    /**
     * ストラクチャーを設置するための座標、向きを返す
     * @returns ストラクチャーの情報
     */
    public static getWillLoadStructureData(): StructureData{
        const agentDirection = agent.getOrientation();
        const agentDirectionXYZ = this.getAgentDirection();

        let structureDirection = 0;
        // -180と-90は左寄り
        switch (agentDirection) {
            case -180:
                agentDirectionXYZ.z -= 9;
                structureDirection = 270;
                break;
            case -90:
                agentDirectionXYZ.x += 1;
                structureDirection = 0;
                break
            case 90:
                agentDirectionXYZ.x -= 9;
                structureDirection = 180;
                break;
            case 0:
                agentDirectionXYZ.z += 1;
                structureDirection = 90;
                break;
        }

        return {structurePos: agentDirectionXYZ, structureDirection: structureDirection};
    }

    /**
     * コマンドで用いられるハーフブロックの名前を返す
     * @param block ブロック
     * @returns コマンド使われるそのブロックの文字列
     */
    public static getCommandHalfBlock(block: Block): string {
        switch(block){
            case DOUBLE_STONE_SLAB:
            case SMOOTH_STONE_SLAB:
                return `stone_block_slab 8`;
            case STONE_SLAB:
                return `stone_block_slab4 10`;

            case SANDSTONE_SLAB:
                return `stone_block_slab 9`;

            case COBBLESTONE_SLAB:
                return `stone_block_slab 11`;

            case BRICKS_SLAB:
                return `stone_block_slab 12`;

            case STONE_BRICKS_SLAB:
                return `stone_block_slab 13`;

            case QUARTZ_SLAB:
                return `stone_block_slab 14`;

            case NETHER_BRICK_SLAB:
                return `stone_block_slab 15`;

            case DOUBLE_WOODEN_SLAB:
            case OAK_WOOD_SLAB:
                return `wooden_slab 8`;

            case SPRUCE_WOOD_SLAB:
                return `wooden_slab 9`;

            case BIRCH_WOOD_SLAB:
                return `wooden_slab 10`;

            case JUNGLE_WOOD_SLAB:
                return `wooden_slab 11`;

            case ACACIA_WOOD_SLAB:
                return `wooden_slab 12`;

            case DARK_OAK_WOOD_SLAB:
                return `wooden_slab 13`;

            case DOUBLE_RED_SANDSTONE_SLAB:
            case RED_SANDSTONE_SLAB:
                return `stone_block_slab2 8`;

            case PURPUR_SLAB:
                return `stone_block_slab2 9`;

            case PRISMARINE_SLAB:
                return `stone_block_slab2 10`;

            case DARK_PRISMARINE_SLAB:
                return `stone_block_slab2 11`;

            case PRISMARINE_BRICK_SLAB:
                return `stone_block_slab2 12`;

            case CRIMSON_SLAB:
                return `crimson_slab 1`;

            case WARPED_SLAB:
                return `warped_slab 1`;

            case BLACKSTONE_SLAB:
                return `blockstone_slab 1`;

            case MANGROVE_SLAB:
                return `mangrove_slab 1`;

            case BAMBOO_SLAB:
                return `bamboo_slab 1`;

            case CHERRY_SLAB:
                return `cherry_slab 1`;
        }

        return `stone_block_slab 9`;
    }
}