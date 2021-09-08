export class EnrollmentList {
        id: number;
        enrolledDate: string;
        email: string;
        firstName: string;
        lastName: string;
        fullName: string;
        organisationName: string;
        mobile: string;
        memberRoleValue: string;
        genderValue: string;
        sectorValue: string;
        countryValue: string;
        status: number;
        statusValue: string;

        constructor(id: number, enrolledDate: string, email:string,
            firstName: string, lastName: string, fullName:string,
            organisationName: string, mobile: string, memberRoleValue:string,
            genderValue: string, sectorValue: string, countryValue:string,
            status: number, statusValue: string){
            this.id = id;
            this.enrolledDate = enrolledDate;
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = fullName;
            this.organisationName = organisationName;
            this.mobile = mobile;
            this.memberRoleValue = memberRoleValue;
            this.genderValue = genderValue;
            this.sectorValue = sectorValue;
            this.countryValue = countryValue;
            this.status = status;
            this.statusValue = statusValue;
        }
}
