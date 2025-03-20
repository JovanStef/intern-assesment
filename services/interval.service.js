export default class IntervalService {
    static getRandomNumberInRange(min , max){
        return Math.floor( Math.random() * (max - min) + min);
    }
}