export class Bill {
  constructor(public bill_Id: number,
              public bill_paid: number,
              public discount: number,
              public net: number,
              public pat_Id_fk: number,
              public test_Id_fk: number,
              public bill_date: Date,
              public dis_Id_fk: number
  ) {

  }

  // bill_id:number;
  // bill_paid:number;
  // bill_date:Date;
  // discount:number;
  // net:number;
  // pat_id:number;
  // test_id:number;


}
