var i = 0;
var Detail_Status = 0;
var katalogId = 1;
var productName = "NONE";
const MenuItems = document.querySelectorAll('a[href]');
var ImgLocation = "product/TIMBANGAN_20230722_210503_";



window.onload = function(){
	
	
	var images = ["img/jemtruk_0.png", "img/jemtruk_1.png", "img/jemtruk_2.png", "img/jemtruk_3.png", "img/jemtruk_4.png"]; 
	
	var topId = 1;
	var id = 1;
	var id_LEFT = 0;
	var id_RIGHT = 2;
	
	var previousId = 0;
	var delay = 10000;	
	var ImgElement = document.getElementById("topImg");
	var ImgLeftElement = document.getElementById("topImgLeft");
	var ImgRightElement = document.getElementById("topImgRight");
	var imagesCompany1 = ["PT/PT_Big_0.png", "PT/PT_Big_1.png", "PT/PT_Big_2.png"]; 
	var BigImg = document.getElementById("h7Img1");
	
	var imagesCompany2 = ["PT/PT_Small_0.png", "PT/PT_Small_1.png", "PT/PT_Small_2.png"]; 
	var SmallImg = document.getElementById("h7Img2");
	
	var h7TextList = ["PTPN IX adalah perusahaan perkebunan yang mengkhususkan diri dalam produksi dan pengolahan kelapa sawit, menjadi salah satu pemain utama di industri perkebunan di Indonesia.", "PT So Good adalah sebuah perusahaan makanan yang terkenal dengan produk-produknya yang lezat dan inovatif.", "PT Waskita Karya adalah perusahaan konstruksi terkemuka di Indonesia yang telah sukses dalam membangun proyek-proyek infrastruktur yang penting."];
	
	setInterval(
		function() 
		{
			//GAMBAR TENGAH
			id = (id + 1) % imagesCompany1.length; // Mengupdate indeks gambar
			topId = (topId + 1) % images.length; //gambar PT BAWAH
			ImgElement.src = images[topId];
			
			//GAMBAR KIRI
			id_LEFT = (id_LEFT + 1) % images.length;
			ImgLeftElement.src = images[id_LEFT];
			
			//GAMBAR KANAN
			id_RIGHT = (id_RIGHT + 1) % images.length;
			ImgRightElement.src = images[id_RIGHT];
			
			var txt = ".icon" + topId;
			var txt2 = ".icon" + previousId;
			circleElement = document.querySelector(txt);
			circleElement.style.border = "12px solid white";
			circleElement2 = document.querySelector(txt2);
			circleElement2.style.border = "7px solid gray";
			previousId = topId;
			
			BigImg.src = imagesCompany1[id];
			SmallImg.src = imagesCompany2[id];
			
			var h7Text = document.querySelector(".h7Text2");
			var font = document.querySelector(".h7Text2 font");
			
			font.textContent = h7TextList[id];
			h7Text.classList.add('effect');
			BigImg.classList.add('effect');
			SmallImg.classList.add('effect');
			ImgElement.classList.add('effect');
			
			setTimeout(function() {
			 h7Text.classList.remove('effect');
			 BigImg.classList.remove('effect');
			 ImgElement.classList.remove('effect');
			 SmallImg.classList.remove('effect');
			}, 1000);
		},
	delay);
  
}
MenuItems.forEach(item => {
  item.addEventListener('click', scrollToSection);
});

function scrollToSection(event){
	event.preventDefault();
	
	const target = document.querySelector(this.getAttribute('href'));
	const offset = target.offsetTop;
	
	
	window.scrollTo({
		top: offset,
		behavior: 'smooth'
	});

}
function changeDescriptionWithProductName(stringName, IsImage) {
	var fungsi = document.querySelector('.DetailText_FUNGSI');
	var ready = document.querySelector('.DetailText_STATUS');
	var Img = document.querySelector('.DetailImg');
	var TextContent = "None";
	
	var KALIMAT_STATUS_READY = "Semua Produk Ready Tersedia!";
	
	switch (stringName) {
		case "Timbangan Duduk":
			fungsi.textContent = "Timbangan duduk berfungsi untuk mengukur berat benda-benda ringan hingga sedang dengan akurasi yang tinggi.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_1.png";
			TextContent = stringName;
			break; // tambahkan break untuk keluar dari switch setelah kasus pertama
		case "Timbangan Lantai 500-3.000 kg":
			fungsi.textContent = "Timbangan lantai dengan kapasitas 500 - 3000kg berfungsi untuk mengukur berat benda-benda besar atau muatan industri dengan presisi tinggi.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_7.png";
			TextContent = stringName;
			break; 
		case "Timbangan Industrial Counting":
			fungsi.textContent = "Alat penimbangan serbaguna yang dapat menimbang dan menghitung jumlah benda yang ditimbang secara bersamaan. ";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_0.png";
			TextContent = stringName;
			break; 
		case "Timbangan Analytic - Lab - Emas":
			fungsi.textContent = "Alat presisi yang digunakan di laboratorium untuk menimbang benda dengan tingkat ketelitian tinggi, khususnya dalam aplikasi pengukuran emas dan bahan-bahan kimia lainnya.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_11.png";
			TextContent = stringName;
			break; 
		case "Crane Scale Digital":
			fungsi.textContent = "Timbangan Crane Digital adalah alat yang digunakan untuk mengukur berat benda-benda besar atau muatan dengan menggunakan prinsip gaya berat yang dipasang pada derek atau crane, memungkinkan pengukuran yang akurat dan efisien dalam berbagai aplikasi industri.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_8.png";
			TextContent = stringName;
			break; 
		case "Salter Gantung : 50, 100 kg":
			fungsi.textContent = "Timbangan gantung Salter dengan kapasitas 50 dan 100 kg merupakan alat yang digunakan untuk mengukur berat benda atau muatan dengan akurat dan praktis, cocok untuk berbagai kebutuhan pengukuran dalam lingkungan industri maupun komersial.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_3.png";
			TextContent = stringName;
			break; 
		case "Indicator (Monitor)":
			fungsi.textContent = "Monitor atau indikator pada timbangan adalah perangkat yang menampilkan hasil pengukuran berat dari timbangan, memberikan informasi kepada pengguna dalam bentuk angka atau grafik untuk memudahkan pengamatan dan analisis berat barang atau muatan yang diukur.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_2.png";
			TextContent = stringName;
			break; 
		case "Software Jembatan Timbang":
			fungsi.textContent = "Perangkat lunak jembatan timbang adalah aplikasi yang digunakan untuk mengelola dan menganalisis data pengukuran dari jembatan timbang, memungkinkan pengguna untuk melacak dan merekam berat muatan, serta menghasilkan laporan dan analisis untuk keperluan manajemen dan pengawasan logistik.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_4.png";
			TextContent = stringName;
			break; 
		case "Load Cells (Sensor Timbangan) : 60kg - 30 ton":
			fungsi.textContent = "Sensor Load Cells dengan rentang kapasitas 60kg hingga 30ton adalah perangkat sensor yang digunakan dalam sistem timbangan untuk mengukur dan merekam gaya atau berat yang diterapkan padanya, memberikan akurasi dan presisi dalam berbagai aplikasi industri dan komersial.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_6.png";
			TextContent = stringName;
			break; 
		case "Timbangan Buah":
			fungsi.textContent = "Alat yang digunakan untuk menimbang buah secara akurat, memungkinkan penjual atau pembeli untuk mendapatkan jumlah yang tepat sesuai dengan kebutuhan mereka.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_13.png";
			TextContent = stringName;
			break; 
		case "Timbangan Moisture Analyzer":
			fungsi.textContent = "Alat yang digunakan untuk mengukur kadar air pada suatu sampel. Alat ini terdiri dari unit penimbangan dan pemanas inframerah. ";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_14.png";
			TextContent = stringName;
			break; 
		case "Timbangan Hewan - Sapi (500kg - 3 ton)":
			fungsi.textContent = "Alat yang membantu peternak dan ahli pertanian dalam memantau pertumbuhan dan kesehatan ternak mereka.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = "product/TIMBANGAN_20230722_210503_12.png";
			TextContent = stringName;
			break; 
		//-------------------------------------------------------------------------------------------
        case "product/TIMBANGAN_20230722_210503_1.png":
			fungsi.textContent = "Timbangan duduk berfungsi untuk mengukur berat benda-benda ringan hingga sedang dengan akurasi yang tinggi.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Timbangan Duduk";
			break;
		case "product/TIMBANGAN_20230722_210503_7.png":
			fungsi.textContent = "Timbangan lantai dengan kapasitas 500 - 3000kg berfungsi untuk mengukur berat benda-benda besar atau muatan industri dengan presisi tinggi.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Timbangan Lantai 500-3.000 kg";
			break;
		case "product/TIMBANGAN_20230722_210503_0.png":
			fungsi.textContent = "Alat penimbangan serbaguna yang dapat menimbang dan menghitung jumlah benda yang ditimbang secara bersamaan.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Timbangan Industrial Counting";
			break;
		case "product/TIMBANGAN_20230722_210503_11.png":
			fungsi.textContent = "Alat presisi yang digunakan di laboratorium untuk menimbang benda dengan tingkat ketelitian tinggi, khususnya dalam aplikasi pengukuran emas dan bahan-bahan kimia lainnya.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Timbangan Analytic - Lab - Emas";
			break;
		case "product/TIMBANGAN_20230722_210503_8.png":
			fungsi.textContent = "Timbangan Crane Digital adalah alat yang digunakan untuk mengukur berat benda-benda besar atau muatan dengan menggunakan prinsip gaya berat yang dipasang pada derek atau crane, memungkinkan pengukuran yang akurat dan efisien dalam berbagai aplikasi industri.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Crane Scale Digital";
			break;
		case "product/TIMBANGAN_20230722_210503_3.png":
			fungsi.textContent = "Timbangan gantung Salter dengan kapasitas 50 dan 100 kg merupakan alat yang digunakan untuk mengukur berat benda atau muatan dengan akurat dan praktis, cocok untuk berbagai kebutuhan pengukuran dalam lingkungan industri maupun komersial.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Salter Gantung : 50, 100 kg";
			break;
		case "product/TIMBANGAN_20230722_210503_2.png":
			fungsi.textContent = "Monitor atau indikator pada timbangan adalah perangkat yang menampilkan hasil pengukuran berat dari timbangan, memberikan informasi kepada pengguna dalam bentuk angka atau grafik untuk memudahkan pengamatan dan analisis berat barang atau muatan yang diukur.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Indicator (Monitor)";
			break;
		case "product/TIMBANGAN_20230722_210503_4.png":
			fungsi.textContent = "Perangkat lunak jembatan timbang adalah aplikasi yang digunakan untuk mengelola dan menganalisis data pengukuran dari jembatan timbang, memungkinkan pengguna untuk melacak dan merekam berat muatan, serta menghasilkan laporan dan analisis untuk keperluan manajemen dan pengawasan logistik.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Software Jembatan Timbang";
			break;
		case "product/TIMBANGAN_20230722_210503_6.png":
			fungsi.textContent = "Sensor Load Cells dengan rentang kapasitas 60kg hingga 30ton adalah perangkat sensor yang digunakan dalam sistem timbangan untuk mengukur dan merekam gaya atau berat yang diterapkan padanya, memberikan akurasi dan presisi dalam berbagai aplikasi industri dan komersial.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Load Cells (Sensor Timbangan) : 60kg - 30 ton";
			break;
		case "product/TIMBANGAN_20230722_210503_13.png":
			fungsi.textContent = "Alat yang digunakan untuk menimbang buah secara akurat, memungkinkan penjual atau pembeli untuk mendapatkan jumlah yang tepat sesuai dengan kebutuhan mereka.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Timbangan Buah";
			break;
		case "product/TIMBANGAN_20230722_210503_14.png":
			fungsi.textContent = "Alat yang digunakan untuk mengukur kadar air pada suatu sampel. Alat ini terdiri dari unit penimbangan dan pemanas inframerah.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Timbangan Moisture Analyzer";
			break;
		case "product/TIMBANGAN_20230722_210503_12.png":
			fungsi.textContent = "Alat yang membantu peternak dan ahli pertanian dalam memantau pertumbuhan dan kesehatan ternak mereka.";
			ready.textContent = KALIMAT_STATUS_READY;
			Img.src = stringName;
			TextContent = "Timbangan Hewan - Sapi (500kg - 3 ton)";
			break;
		default:
			fungsi.textContent = "Tidak Terdaftar";
			ready.textContent = "Tidak Diketahui";
			break;
    }
	if(IsImage)
	{
		return TextContent;
	}
}
function showDetail(clickedFont) {
  var element = document.querySelector('.ShowProductDetail');
  var textProduct = document.querySelector('.DetailText_NAME');
  var backText = document.querySelector('.HideDetail');
  
  console.log(clickedFont.textContent); // Check the text content of the clicked font element
  var IsBack = clickedFont.textContent;
	  
  if (element) {
    if (Detail_Status == 0) 
	{
		if(IsBack != "Back")
		{
		  console.log(clickedFont.textContent); // Check the text content of the clicked font element
		  var TextContent = clickedFont.textContent;
		  element.classList.remove('hide');
		  element.classList.add('show');
		  Detail_Status = 1;
		  textProduct.textContent = changeDescriptionWithProductName(TextContent, false);
		  backText.style.opacity = "100";
		}
    } 
	else if (Detail_Status == 1) 
	{
      element.classList.remove('show');
      element.classList.add('hide');
      Detail_Status = 0;
	  backText.style.opacity = "0";
    }
  }
  event.preventDefault();
  history.pushState(null, '', '/ShowDetailPage');
}
function showDetailFromImage(clickedImg) {
  var element = document.querySelector('.ShowProductDetail');
  var backText = document.querySelector('.HideDetail');
  var textProduct = document.querySelector('.DetailText_NAME');
  
  console.log(clickedFont.textContent); // Check the text content of the clicked font element
  var IsBack = clickedFont.textContent;
  
  if (element) {
    if (Detail_Status == 0) 
	{
		if(IsBack != "BACK")
		{
		  console.log(clickedImg.src); // Check the image content of the clicked image element
		  var ImageSource = clickedImg.src;
		  var newPath = ImageSource.replace("file:///C:/xampp/htdocs/HTML/", "");
		  console.log(newPath);
		  element.classList.remove('hide');
		  element.classList.add('show');
		  Detail_Status = 1;
		  textProduct.textContent = changeDescriptionWithProductName(newPath, true);
		  backText.style.opacity = "100.0";
		}
    } 
	else if(Detail_Status == 1)
	{
      element.classList.remove('show');
      element.classList.add('hide');
      Detail_Status = 0;
	  backText.style.opacity = "0";
    }
  }
}


function socialMedia() {
  var element = document.querySelector('.container');
  if (element) {
    if (i == 0) {
      element.classList.remove('hide');
      element.classList.add('show');
	  i++;
    } else {
      element.classList.remove('show');
      element.classList.add('hide');
	  i--;
    }
  }
}
function rightArrow() {
	katalogId = (katalogId + 1) % 9;
	var txt = "katalog/katalog_" + katalogId + ".png";
	var element = document.querySelector('.h3Image');
	element.src = txt;
	element.classList.add('effectLeft');
	element.onload = function () {
		var colorThief = new ColorThief();
		var dominantColor = colorThief.getColor(element);
		var cssColor = 'rgb(' + dominantColor[0] + ', ' + dominantColor[1] + ', ' + dominantColor[2] + ')';

		var heading = document.getElementById('scrollImage');
		heading.style.backgroundColor = cssColor;
	};
	setTimeout(function() {
		element.classList.remove('effectLeft');
	},
	1200);
		
}
function leftArrow() {
	katalogId = (katalogId - 1 + 9) % 9;
	var txt ="katalog/katalog_" + katalogId + ".png";
	var element = document.querySelector('.h3Image');
	element.src = txt;
	element.classList.add('effectRight');
	element.onload = function() {
	var colorThief = new ColorThief ();
	var dominantColor = colorThief.getColor(element);
	var cssColor = 'rgb(' + dominantColor[0] + ', ' + dominantColor[1] + ', ' + dominantColor[2] + ')';
	
	var heading = document.getElementById('scrollImage');
	heading.style.backgroundColor = cssColor;
   };
   setTimeout(function() {
		element.classList.remove('effectRight');
	},
	1200);
		
}
// JS
function ButtonSelengkapnya() {
  var ImgElements = document.querySelectorAll(".listImg");
  var TextElements = document.querySelectorAll(".listText");
  var textButton = document.querySelector(".textSelengkapnya");
  var list3 = document.querySelector(".list3");
  var list4 = document.querySelector(".list4");
  var list5 = document.querySelector(".list5");
  var list6 = document.querySelector(".list6");
  var font = document.querySelectorAll(".listProduct font");

  
  ImgElements.forEach(function (img) {
    img.classList.add("show");
  });

  TextElements.forEach(function (text) {
    text.classList.add("effect");
	textButton.classList.add("hide");
	list3.classList.add("show");
	list4.classList.add("show");
	list5.classList.add("show");
	list6.classList.add("show");
  });
  
   font.forEach(function (tFont) {
		tFont.classList.add("show");
   });
}
