
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum halfBlocks {
    //% block="なめらかないし"
    SMOOTH_STONE,
    //% block="いし"
    STONE,
    //% block="まるいし"
    COLLABLE_STONE,
    //% block="オークの木"
    OAK,
    //% block="トウヒの木"
    SPRUCE,
    //% block="しらかばの木"
    BIRCH,
    //% block="ジャングルの木"
    JUNGLE,
    //% block="アカシアの木"
    ACACIA,
    //% block="ダークオークの木"
    DARK_OAK,
    //% block="マングローブの木"
    MANGROVE,
    //% block="さくらの木"
    CHERRY,
    //% block="たけの木"
    BAMBOO
}
enum paintblocks{
    //% block="きいろのカーペット"
    YELLOW_CARPET=262315,
    //% block="しろのカーペット"
    WHITE_CARPET=171
}

//% color=#696969 weight=400 icon="\uf018" block=みちをつくる
namespace road {
    //% blockId=makeLigthPaint
    //% block="みぎのまんなかのてんせんを $block でつくる"
    //% block.shadow=minecraftBlocks
    export function makeLigthPaint(block:paintblocks){
        agent.teleport(world(-1350, 69, -1264), WEST)
        agent.move(FORWARD, 5)
        agent.setItem(block, 64, 1)
        for (let index = 0; index < 7; index++) {
            for (let index = 0; index < 5; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.move(FORWARD, 5)
        }
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
    }
    //% blockId=makeLeftPaint
    //% block="ひだりのまんなかのてんせんを $block でつくる"
    //% block.shadow=minecraftBlocks
    export function makeLeftPaint(block:paintblocks){
        agent.teleport(world(-1350, 69, -1272), WEST)
        agent.move(FORWARD, 5)
        agent.setItem(block, 64, 1)
        for (let index = 0; index < 7; index++) {
            for (let index = 0; index < 5; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.move(FORWARD, 5)
        }
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
    }
    //% blockId=makeMiddlePaint
    //% block="まんなかのせんを $block でつくる"
    //% block.shadow=minecraftBlocks
    export function makeMiddlePaint(block: paintblocks) {
        agent.teleport(world(-1351, 69, -1268), WEST)
        agent.setItem(block, 64, 1)
        for (let index = 0; index < 80; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
    }
    //% blockId=makeroad
    //% block="どうろをいしでつくる"
    //% block.shadow=minecraftBlock
    export function makeroad() {
        player.execute(
            "/fill -1351 67 -1275 -1430 67 -1261 stone"
        )
    }
    //% blokId=reset
    //% block="さいしょにもどす"
    export function reset(){
        player.execute(
            "/fill -1351 67 -1275 -1430 68 -1261 air"
        )
    }
}

/**
 * Custom blocks
 */
//% color=#B40404 weight=400 icon="\uf1b9" block=くるまをつくる
namespace custom {
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% blockID=makeCircle
    //% block="しゃたい(下)を $myBlock でつくる"
    export function makeBottomBody(myBlock: halfBlocks) {
        buildingCarBody(myBlock);
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% blockID=makeCircle
    //% block="しゃたいを $myBlock でつくる"
    //% myBlock.shadow=minecraftBlock
    export function makeBody(myBlock: number) {
        buildingCarBody(myBlock);
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% blockID=makeCircle
    //% block="しゃたい(上)を $myBlock でつくる"
    export function makeUpBody(myBlock: halfBlocks) {
        buildingCarBody(myBlock);
    }

    function buildingCarBody(value: halfBlocks){
        
    }
}