
            // truy xuất
            const sl = document.getElementsByClassName("soluong");
            const dg = document.getElementsByClassName("donggia");
            const tt = document.getElementsByClassName("thanhtien");
            //khởi tạo
            let tongthanhtoan = 0;

            //Duyệt mảng
            for(let i = 0; i< sl.length; i++)
            {
                let thanhtien = parseInt(sl[i].innerText)* parseInt(dg[i].innerText);
                tt[i].innerText = thanhtien;
                tongthanhtoan += thanhtien;
            }
            // cập nhật giá trị
            document.getElementById("tongthanhtoan").innerText = tongthanhtoan;