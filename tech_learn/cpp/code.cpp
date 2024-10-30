#include<bits/stdc++.h>


using namespace std;

int main() {
 
    int bimbim = 5000;
    int keomut = 2000;
    int sting = 10000;
    int kem = 12000;
    int banhtrang = 15000;

    int tbimbim;
    int tkeomut;
    int tsting;
    int tkem;
    int tbanhtrang;



    cout<< "Xin chào mọi người đến với tạp Hóa Đạt đẹp chai \n";
    cout<< "=================== MENU ==================== \n";
    cout<< " * Bim bim : "<<bimbim << " VND \n";
    cout<< " * Kẹo mút : "<<keomut << " VND \n";
    cout<< " * String : "<<sting << " VND \n";
    cout<< " * Kem : "<<kem << " VND \n";
    cout<< " * Bánh tráng : "<<banhtrang << " VND \n";
    cout<<endl;
    cout<<"Mời bạn chọn : \n";
    cout<<"Bạn lấy bao nhiêu Bim bim (bịch): ";
    cin>>tbimbim;
    cout<<endl;
    cout<<"Bạn lấy bao nhiêu Kẹo mút (cái): ";
    cin>>tkeomut;
    cout<<endl;
    cout<<"Bạn lấy bao nhiêu String (chai): ";
    cin>>tsting;
    cout<<endl;
    cout<<"Bạn lấy bao nhiêu Kem (cây): ";
    cin>>tkem;
    cout<<endl;
    cout<<"Bạn lấy bao nhiêu Bánh tráng (bịch): ";
    cin>>tbanhtrang;
    cout<<endl;
    cout<<"Tổng số tiền bạn cần trả là : " << bimbim*tbimbim + keomut*tkeomut + kem*tkem + sting*tsting + banhtrang*tbanhtrang << " (VND)";





 return 0;
}
