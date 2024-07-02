import {AccountService, User} from './AccountService';
import {ProductService, ProductCategory} from './ProductService';

const category : ProductCategory = { name: "Car", discount: [ {userType: "Gold", percent : 2}, {userType: "Standard", percent : 2} ]};
const user : User = { id: 8, login: 'user2', type: { userType: 'Standard', discount: 2 }};

describe('accountService', () => {
    it('should return right user types', () => {   
        const accountService = new AccountService();
        const expected = ['Standard' , 'Premium' , 'Gold' , 'Free'];

        const userTypes = accountService.getUserTypes().map((item) => {
            return item.userType
        })
        
        expect(userTypes).toEqual(expect.arrayContaining(expected));
    })

    it('should return types with discount', () => {   
        const accountService = new AccountService();

        const userTypes = accountService.getUserTypes();
        expect(userTypes[0]).toHaveProperty('discount');
    })

    it('should return summ discount', () => {
        const accountService = new AccountService();
        const productService = new ProductService(accountService);
        let spyProductService = jest.spyOn(productService, 'getCategory').mockImplementation(() => {return category});
        let spyAccountService = jest.spyOn(accountService, 'getUser').mockImplementation(() => {return user});

        const discount = productService.getDiscount(8,'Car');
        expect(discount).toBe(4);
    })
});
