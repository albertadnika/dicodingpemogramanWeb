function loadData(param) {
    document.getElementById('first').style.display = "none";
    var isi = document.getElementById('submission');
    isi.innerHTML = '';
    if (param == 'me') {
        isi.innerHTML = "<h2>Biodata Ku</h2>" +
        "<div class=row><div class='col-4 text-bold'>Nama</div><div class=col-8><span class=titik-dua>: </span>Albert Andika Tarigan</div></div>" +
    "<div class=row><div class='col-4 text-bold'>Alamat</div><div class=col-8><span class=titik-dua>: </span> Jl. Pinang 1 No.14 Medan</div></div>" +
        "<div class=row><div class='col-4 text-bold'>Tempat/ Tanggal Lahir</div><div class=col-8><span class=titik-dua>: </span>Medan / 20 April 1993</div></div>" +
        "<div class=row><div class='col-4 text-bold'>Hobi</div><div class=col-8><span class=titik-dua>: </span>Membaca dan bermain Game</div></div>";
    } else if (param == 'keluarga') {
        isi.innerHTML = "<h2>Keluarga Ku <h2>" + 
        "<span>Aku adalah anak ke - <strong>3</strong> dari 4 bersaudara, dan ini lah foto mereka<br>" +
        "<div class=row>" +
        "<div class='col-4 img-foto'><figure> <img src='./image/bangMika.jpg'><figcaption><p> Mikha Tarigan</p></figcaption></figure></div>" + 
        "<div class='col-4 img-foto'><figure>  <img src='./image/bangTius.jpeg'><figcaption><p> Timotius Tarigan</p></figcaption></figure></div>" + 
        "<div class='col-4 img-foto'> <figure>  <img src='./image/anggi.jpg'><figcaption><p> Debi Anggini Tarigan</p></figcaption></figure></div>" +  
        "</div>";
    } else if (param == 'activity') {
        isi.innerHTML = "<h2>Aktivitas ku</h2>" +
            "<div class=center><span>Keseharian ku , lebih banyak mengerjakan pekerjaan rumah dan bermain game<br>" +
            "Salah satu game yang sering saya mainkan yaitu <i>Mobile Legend</i> <br>" +
            "<iframe src='https://m.mobilelegends.com/en'> </div>"
            ;
    }
}