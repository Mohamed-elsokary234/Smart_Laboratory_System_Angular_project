export class employee{
constructor(
        public empl_Id:number ,
        public empl_name:string ,
        public empl_phone :string,
        public empl_address:string,
        public empl_salary:number,
        public empl_quantification:string,
        public empl_work_period:string,
        public empl_email:string,
        public job_Id_fk:number,
        public User_ID_fk : string,
        public emp_date: Date
       // public job:job ;
       // public results:ICollection<result>;
){}
}



