
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum halfBlocks2 {
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

/**
 * Custom blocks
 */
//% color=#B40404 weight=400 icon="\uf1b9" block=くるまをつくる
namespace custom2 {
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% blockID=makeCircle
    //% block="しゃたい(下)を $myBlock でつくる"
    export function makeBottomBody2(myBlock: halfBlocks) {
        buildingCarBody(myBlock);
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% blockID=makeCircle
    //% block="しゃたいを $myBlock でつくる"
    //% myBlock.shadow=minecraftBlock
    export function makeBody2(myBlock: number) {
        buildingCarBody(myBlock);
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% blockID=makeCircle
    //% block="しゃたい(上)を $myBlock でつくる"
    export function makeUpBody2(myBlock: halfBlocks) {
        buildingCarBody(myBlock);
    }

    function buildingCarBody(value: halfBlocks){
        
    }
}