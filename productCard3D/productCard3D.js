import { LightningElement,track } from 'lwc';
import nike from '@salesforce/resourceUrl/Nike';

export default class ProductCard3D extends LightningElement {
    @track IMG = nike;
}