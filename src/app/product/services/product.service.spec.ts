// HttpClientTestingModule provides fake/mock http client
import { HttpClientTestingModule, 
         HttpTestingController , // for mocking api calls
        } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

fdescribe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', (done) => {
    expect(service).toBeTruthy();

    service.getProducts()
           .subscribe( products => {
             console.log("*******", products)
             expect(products.length).toBe(2);
             expect(products).toEqual([ {id: 1, name: "product 1", price: 100, year: 2020, brandId: 1, }, 
                                        {id: 2, name: "product 2", price: 200, year: 2021, brandId: 2, },
            ])

            done();
           })

    // now create mock response to the request for products
    let productsRequest = httpMock.expectOne('http://localhost:7070/secured/api/products')
    // respond to api call, acting like a web service
    productsRequest.flush([ {id: 1, name: "product 1", price: 100, year: 2020, brandId: 1, }, 
    {id: 2, name: "product 2", price: 200, year: 2021, brandId: 2, },
    ])

    httpMock.verify(); // whether api call made or not
  });
});
