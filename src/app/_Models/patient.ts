export class patient{

    constructor(
        public pat_Id:number,
        public pat_f_name:string,
        public pat_l_name:string,
        public pat_gender:string,
        public pat_age:number,
        public dis_Id_fk:number,
        public pat_email:number,
        public pat_address:string,
        public pat_date:Date,
        public pat_phone:string,
        public UserID_fk:string
    ){

    }
}
