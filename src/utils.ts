import chalk from "chalk";

export function logTitle(message:string){
    const totalLength = 80;
    const messageLength = message.length;
    const padding = Math.max(0, totalLength - messageLength - 4);
    const paddedMessage = `${'='.repeat(Math.floor(padding/2))} ${message} ${'='.repeat(Math.ceil(padding/2))}`;
    console.log(chalk.bold.greenBright(paddedMessage));
}

export function logDescription(message: any) {  // 改为 any 或 unknown 类型
    if (typeof message === 'object' && message !== null) {
        // 对象类型处理
        console.log(chalk.bold.redBright(JSON.stringify(message, null, 2)));
    } else {
        // 字符串/原始类型处理
        console.log(chalk.bold.redBright(String(message)));
    }
}