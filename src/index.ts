import {getResult, mockAxios} from "@/requests/getMockTest";
import {mockCriteria} from "@/mock/mockCriteria";

function main(){
    mockCriteria(mockAxios);
    getResult();
}

main()