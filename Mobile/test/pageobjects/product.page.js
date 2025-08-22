import { $ } from '@wdio/globals'

class ProductPage {

    async getProductTitle(name){
        return $(`~${name}`)
    }

    async getNoProductFound(){
        return $('~No products found')
    }
}

export default new ProductPage();
