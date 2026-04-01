// MBLB - Shared JavaScript Utilities

// ========================================
// UI Controls
// ========================================

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');

    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
        if (!dropdown.contains(e.target) && !e.target.closest('button')) {
            dropdown.classList.add('hidden');
            document.removeEventListener('click', closeDropdown);
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// ========================================
// Toast Notifications
// ========================================

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';

    const colors = {
        success: 'border-l-4 border-green-500 bg-green-50',
        error: 'border-l-4 border-red-500 bg-red-50',
        warning: 'border-l-4 border-orange-500 bg-orange-50',
        info: 'border-l-4 border-indigo-500 bg-indigo-50'
    };

    const icons = {
        success: '<i class="fa-solid fa-circle-check text-green-600"></i>',
        error: '<i class="fa-solid fa-circle-xmark text-red-600"></i>',
        warning: '<i class="fa-solid fa-triangle-exclamation text-orange-600"></i>',
        info: '<i class="fa-solid fa-circle-info text-indigo-600"></i>'
    };

    toast.className += ` ${colors[type]}`;
    toast.innerHTML = `
        <div class="flex items-center gap-3">
            <div class="text-xl">${icons[type]}</div>
            <p class="text-sm font-semibold text-gray-900">${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-auto text-gray-400 hover:text-gray-600">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);
}

// ========================================
// Form Validation
// ========================================

function validateNIK(nik) {
    const nikPattern = /^\d{16}$/;
    return nikPattern.test(nik);
}

function validateNPWPD(npwpd) {
    const npwpdPattern = /^P\.\d+\.\d+\.\d+\.\d+$/;
    return npwpdPattern.test(npwpd);
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^(\+62|62|0)[0-9]{9,12}$/;
    return phonePattern.test(phone.replace(/[\s-]/g, ''));
}

function validateRequired(value) {
    return value !== null && value !== undefined && value.trim() !== '';
}

// ========================================
// File Upload Handler
// ========================================

function handleFileUpload(input, previewId, maxSize = 5) {
    const file = input.files[0];
    const preview = document.getElementById(previewId);

    if (!file) return;

    // Validate file size (in MB)
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
        showToast(`Ukuran file maksimal ${maxSize}MB`, 'error');
        input.value = '';
        return;
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
        showToast('Format file harus JPG, PNG, atau PDF', 'error');
        input.value = '';
        return;
    }

    // Show preview for images
    if (file.type.startsWith('image/') && preview) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.innerHTML = `<img src="${e.target.result}" class="max-w-full h-auto rounded-lg" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }

    showToast('File berhasil diunggah', 'success');
}

// ========================================
// Currency Formatter
// ========================================

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function parseCurrency(formattedAmount) {
    return parseInt(formattedAmount.replace(/[^0-9]/g, '')) || 0;
}

// ========================================
// Date Formatter
// ========================================

function formatDate(date, format = 'long') {
    const d = new Date(date);

    if (format === 'short') {
        return d.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    return d.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Konversi angka menjadi teks Rupiah
function terbilang(angka) {
    if (angka === 0) return "Nol";
    let bilangan = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas'];
    if (angka < 12) return bilangan[angka];
    else if (angka < 20) return terbilang(angka - 10) + ' Belas';
    else if (angka < 100) return terbilang(Math.floor(angka / 10)) + ' Puluh ' + terbilang(angka % 10);
    else if (angka < 200) return 'Seratus ' + terbilang(angka - 100);
    else if (angka < 1000) return terbilang(Math.floor(angka / 100)) + ' Ratus ' + terbilang(angka % 100);
    else if (angka < 2000) return 'Seribu ' + terbilang(angka - 1000);
    else if (angka < 1000000) return terbilang(Math.floor(angka / 1000)) + ' Ribu ' + terbilang(angka % 1000);
    else if (angka < 1000000000) return terbilang(Math.floor(angka / 1000000)) + ' Juta ' + terbilang(angka % 1000000);
    else if (angka < 1000000000000) return terbilang(Math.floor(angka / 1000000000)) + ' Milyar ' + terbilang(angka % 1000000000);
    return 'Angka terlalu besar';
}

// Menghitung Sanksi Bunga Keterlambatan (dinamis dari konfigurasi)
function hitungBunga(pokokPajak, tanggalJatuhTempo, tanggalBayar = null) {
    if (!tanggalBayar) {
        tanggalBayar = new Date().toISOString().split('T')[0];
    }

    const config = JSON.parse(localStorage.getItem('mblb_konfigurasi') || '{}');
    const bungaPerBulan = (config.dendaBungaPersen || 2) / 100;
    const maxBulan = config.dendaMaxBulan || 24;

    const jatuhTempo = new Date(tanggalJatuhTempo);
    const bayar = new Date(tanggalBayar);

    if (bayar <= jatuhTempo) {
        return { bulanTelat: 0, persentaseSanksi: 0, nominalBunga: 0 };
    }

    // Hitung selisih bulan secara absolut
    let bulanTelat = (bayar.getFullYear() - jatuhTempo.getFullYear()) * 12 + (bayar.getMonth() - jatuhTempo.getMonth());

    // Jika sisa hari bayar lebih besar dari tanggal jatuh tempo, hitung tambah 1 bulan penuh
    if (bayar.getDate() > jatuhTempo.getDate()) {
        bulanTelat++;
    }

    // Tangani edge case bulan yang sama tapi beda hari
    if (bulanTelat === 0 && bayar > jatuhTempo) {
        bulanTelat = 1;
    }

    // Maksimal Denda (Cap) dari konfigurasi
    if (bulanTelat > maxBulan) {
        bulanTelat = maxBulan;
    }

    const persentaseSanksi = bulanTelat * bungaPerBulan;
    const nominalBunga = pokokPajak * persentaseSanksi;

    return {
        bulanTelat: bulanTelat,
        persentaseSanksi: persentaseSanksi,
        nominalBunga: Math.floor(nominalBunga) // Bulatkan ke bawah untuk pajak
    };
}

// Get pejabat penandatangan config
function getPejabatConfig() {
    const config = JSON.parse(localStorage.getItem('mblb_konfigurasi') || '{}');
    return {
        kabid: { nama: config.pejabatKabid || 'PARLYNDUNGAN SIANTURI, SE, MH', nip: config.nipKabid || '197608192010011007', jabatan: config.jabatanKabid || 'Kepala Bidang Penetapan' },
        kadis: { nama: config.pejabatKadis || 'Ir. H. SYAMSUL BAHRI, M.Si', nip: config.nipKadis || '196803151993031005', jabatan: config.jabatanKadis || 'Kepala Badan Pendapatan Daerah' },
        staf: { nama: config.pejabatStaf || 'RINA HARTATI', nip: config.nipStaf || '-', jabatan: config.jabatanStaf || 'Staf Penetapan' }
    };
}

// ========================================
// Auto-save Functionality
// ========================================

function autoSave(formId, storageKey) {
    const form = document.getElementById(formId);
    if (!form) return;

    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        input.addEventListener('change', () => {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            localStorage.setItem(storageKey, JSON.stringify(data));
            showToast('Draft tersimpan otomatis', 'info');
        });
    });
}

function loadSavedData(formId, storageKey) {
    const savedData = localStorage.getItem(storageKey);
    if (!savedData) return;

    const data = JSON.parse(savedData);
    const form = document.getElementById(formId);

    Object.keys(data).forEach(key => {
        const input = form.querySelector(`[name="${key}"]`);
        if (input) {
            input.value = data[key];
        }
    });
}

// ========================================
// Table Filter/Search
// ========================================

function filterTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        let found = false;
        const cells = rows[i].getElementsByTagName('td');

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toUpperCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }

        rows[i].style.display = found ? '' : 'none';
    }
}

// ========================================
// Confirm Action
// ========================================

function confirmAction(message, callback) {
    if (confirm(message)) {
        callback();
    }
}

// ========================================
// Auth & Current User Helper (RBAC)
// ========================================

function getCurrentUser() {
    const str = localStorage.getItem('mblb_current_user') || localStorage.getItem('mblb_user') || '{}';
    return JSON.parse(str);
}

function getWajibPajakById(id) {
    const wps = JSON.parse(localStorage.getItem('mblb_wajib_pajak') || '[]');
    return wps.find(w => w.id === id) || null;
}


function logout() {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
        localStorage.removeItem('mblb_current_user');
        window.location.href = '../index.html';
    }
}

function resetPrototypeData() {
    if (confirm('Hapus semua data dan reset ke Data Dummy v14 (Terbaru)?')) {
        // Clear all mblb_ storage
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('mblb_')) {
                localStorage.removeItem(key);
            }
        });
        
        // Explicitly clear any old init keys
        for(let i=0; i<=20; i++) localStorage.removeItem('mblb_init_v' + i);

        showToast('Data direset ke v14. Me-reload halaman...', 'success');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}

function checkAuth() {
    const path = window.location.pathname.replace(/\\/g, '/');
    // Skip auth check for login page, index, Wajib Pajak portal, documents, and static pages
    if (path.includes('index.html') || path.endsWith('index.html') || path.includes('Wajib%20Pajak') || path.includes('Wajib Pajak') || path.includes('documents')) return;

    const user = getCurrentUser();
    if (!user.role) {
        window.location.href = '../index.html';
        return;
    }

    // Check if current page is allowed by RBAC
    const rbac = getRbacConfig();
    const allowedMenuIds = rbac[user.role] || [];
    const allowedUrls = MBLB_MENU_MASTER.filter(m => allowedMenuIds.includes(m.id)).map(m => m.url);

    const currentFile = decodeURIComponent(path).split('/').slice(-2).join('/');
    const isSubPage = currentFile.includes('detail-sptpd.html') || currentFile.includes('documents');
    const hasAccess = isSubPage || allowedUrls.some(url => currentFile.endsWith(url) || currentFile.endsWith(url.split('/').pop()));

    if (!hasAccess) {
        // Redirect to their own dashboard
        const firstMenu = MBLB_MENU_MASTER.find(m => allowedMenuIds.includes(m.id));
        if (firstMenu) {
            showToast('Anda tidak memiliki akses ke halaman tersebut', 'error');
            window.location.href = '../' + firstMenu.url;
        } else {
            window.location.href = '../index.html';
        }
    }
}

// ========================================
// MBLB Tax Calculation Functions
// ========================================

// Tarif per m³ berdasarkan jenis mineral
const TARIF_MBLB = {
    'tanah-urug': 15000,
    'batu-belah': 25000,
    'pasir': 20000,
    'kerikil': 18000,
    'sirtu': 22000
};

// Calculate tax based on volume and mineral type
function calculateMBLBTax(jenisMineral, volume) {
    const tarif = TARIF_MBLB[jenisMineral] || 0;
    const nilaiJual = volume * tarif;

    // Dynamic tarif pajak from config
    const config = JSON.parse(localStorage.getItem('mblb_konfigurasi') || '{}');
    const tarifPersen = (config.tarifPajakPersen || 20) / 100;
    const pajak = nilaiJual * tarifPersen;
    const opsenAktif = config.opsenAktif !== false;
    const opsenPersen = opsenAktif ? (config.opsenProvinsi || 0) : 0;
    const opsenNominal = Math.floor(pajak * (opsenPersen / 100));
    const totalBayar = pajak + opsenNominal;

    return {
        tarif: tarif,
        nilaiJual: nilaiJual,
        pajak: pajak,
        opsenPersen: opsenPersen,
        opsenNominal: opsenNominal,
        totalBayar: totalBayar
    };
}

// Get opsen config helper
function getOpsenConfig() {
    const config = JSON.parse(localStorage.getItem('mblb_konfigurasi') || '{}');
    return {
        aktif: config.opsenAktif !== false,
        persen: config.opsenProvinsi || 0,
        namaProvinsi: config.namaProvinsi || 'Provinsi'
    };
}

// Get tarif for specific mineral type
function getTarifMBLB(jenisMineral) {
    return TARIF_MBLB[jenisMineral] || 0;
}

// ========================================
// Initialize Tooltips
// ========================================

function initTooltips() {
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');

    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', function () {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip absolute bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg z-50';
            tooltip.textContent = tooltipText;
            tooltip.style.top = this.offsetTop - 40 + 'px';
            tooltip.style.left = this.offsetLeft + 'px';
            this.appendChild(tooltip);
        });

        trigger.addEventListener('mouseleave', function () {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function () {
    initTooltips();
});

// ========================================
// Loading Spinner
// ========================================

function showLoading() {
    const loading = document.createElement('div');
    loading.id = 'globalLoading';
    loading.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    loading.innerHTML = `
        <div class="bg-white rounded-xl p-8 flex flex-col items-center gap-4">
            <div class="spinner"></div>
            <p class="text-gray-700 font-semibold">Memproses...</p>
        </div>
    `;
    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.getElementById('globalLoading');
    if (loading) {
        loading.remove();
    }
}

// ========================================
// Print Function
// ========================================

function printDocument(elementId) {
    const element = document.getElementById(elementId);
    const printWindow = window.open('', '', 'height=600,width=800');

    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<link rel="stylesheet" href="../shared.css">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(element.innerHTML);
    printWindow.document.write('</body></html>');

    printWindow.document.close();
    printWindow.print();
}

// ========================================
// Generate Document Number
// ========================================

function generateDocNumber(prefix, type) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const random = String(Math.floor(Math.random() * 10000)).padStart(6, '0');

    return `${random}/${type}/${prefix}/${month}/${year}`;
}

// --- AUDIT LOG ---
function logActivity(action, details) {
    try {
        const logs = JSON.parse(localStorage.getItem('mblb_audit_log') || '[]');
        const user = getCurrentUser();
        logs.push({
            id: 'AL-' + Date.now(),
            timestamp: new Date().toISOString(),
            user: user.name || user.nama || 'Sistem',
            role: user.role || 'System',
            action: action,
            details: details
        });
        localStorage.setItem('mblb_audit_log', JSON.stringify(logs));
    } catch(e) { console.error('Failed to write audit log', e); }
}

// --- DYNAMIC RBAC SYSTEM ---
const MBLB_MENU_MASTER = [
    { id: 'pendaftaran_dashboard', label: 'Dashboard', icon: 'fa-gauge-high', url: 'Bidang Pendaftaran/dashboard.html', cat: 'Pendaftaran' },
    { id: 'pendaftaran_terima_berkas', label: 'Registrasi Wajib Pajak', icon: 'fa-file-signature', url: 'Bidang Pendaftaran/penerimaan-berkas.html', cat: 'Pendaftaran' },
    { id: 'pendaftaran_berkas_online', label: 'Verifikasi Berkas', icon: 'fa-cloud-arrow-down', url: 'Bidang Pendaftaran/berkas-online.html', cat: 'Pendaftaran' },

    { id: 'lapangan_dashboard', label: 'Dashboard', icon: 'fa-gauge-high', url: 'Staff Lapangan/dashboard.html', cat: 'Lapangan' },
    { id: 'lapangan_input', label: 'Input Survey Laporan', icon: 'fa-clipboard-check', url: 'Staff Lapangan/input-laporan.html', cat: 'Lapangan' },
    { id: 'lapangan_riwayat', label: 'Riwayat Laporan', icon: 'fa-clock-rotate-left', url: 'Staff Lapangan/riwayat-laporan.html', cat: 'Lapangan' },

    { id: 'penetapan_dashboard', label: 'Dashboard', icon: 'fa-gauge-high', url: 'Admin Penetapan/dashboard.html', cat: 'Penetapan' },
    { id: 'penetapan_rekap', label: 'Rekapitulasi Bulanan', icon: 'fa-chart-bar', url: 'Admin Penetapan/rekapitulasi-bulanan.html', cat: 'Penetapan' },
    { id: 'penetapan_nota', label: 'Data SPTPD', icon: 'fa-file-invoice-dollar', url: 'Admin Penetapan/draft-sptpd.html', cat: 'Penetapan' },
    { id: 'penetapan_laporan', label: 'Laporan Penetapan', icon: 'fa-chart-line', url: 'Admin Penetapan/laporan.html', cat: 'Penetapan' },
    { id: 'kabid_dashboard', label: 'Dashboard', icon: 'fa-gauge-high', url: 'Kabid Penetapan/dashboard.html', cat: 'Kabid Penetapan' },
    { id: 'kabid_penugasan', label: 'Penugasan Survey', icon: 'fa-clipboard-user', url: 'Kabid Penetapan/penugasan.html', cat: 'Kabid Penetapan' },
    { id: 'kabid_monitoring', label: 'Penetapan & Monitoring', icon: 'fa-desktop', url: 'Kabid Penetapan/monitoring-sptpd.html', cat: 'Kabid Penetapan' },

    { id: 'penagihan_dashboard', label: 'Dashboard Penagihan', icon: 'fa-gauge-high', url: 'Bidang Penagihan/dashboard.html', cat: 'Penagihan' },
    { id: 'penagihan_billing', label: 'Daftar Tagihan (Billing)', icon: 'fa-list', url: 'Bidang Penagihan/billing-list.html', cat: 'Penagihan' },
    { id: 'penagihan_input_pembayaran', label: 'Input Pembayaran', icon: 'fa-cash-register', url: 'Bidang Penagihan/input-pembayaran.html', cat: 'Penagihan' },
    { id: 'penagihan_laporan', label: 'Laporan Realisasi', icon: 'fa-chart-bar', url: 'Bidang Penagihan/laporan-realisasi.html', cat: 'Penagihan' },

    { id: 'kadis_dashboard', label: 'Dashboard Eksekutif', icon: 'fa-chart-line', url: 'Kepala Dinas/dashboard.html', cat: 'Kepala Dinas' },
    { id: 'kadis_laporan', label: 'Laporan (Executive)', icon: 'fa-file-invoice-dollar', url: 'Kepala Dinas/laporan.html', cat: 'Kepala Dinas' },

    { id: 'admin_dashboard', label: 'Dashboard Admin', icon: 'fa-gauge-high', url: 'Admin Sistem/dashboard.html', cat: 'Admin Sistem' },
    { id: 'admin_master', label: 'Master Data Tarif', icon: 'fa-database', url: 'Admin Sistem/master-tarif.html', cat: 'Admin Sistem' },
    { id: 'admin_user', label: 'Manajemen User', icon: 'fa-users-gear', url: 'Admin Sistem/user-management.html', cat: 'Admin Sistem' },
    { id: 'admin_config', label: 'Konfigurasi Sistem', icon: 'fa-sliders', url: 'Admin Sistem/konfigurasi.html', cat: 'Admin Sistem' },
    { id: 'admin_hak_akses', label: 'Hak Akses (RBAC)', icon: 'fa-shield-halved', url: 'Admin Sistem/hak-akses.html', cat: 'Admin Sistem' },
    { id: 'admin_laporan', label: 'Laporan Admin', icon: 'fa-chart-bar', url: 'Admin Sistem/laporan.html', cat: 'Admin Sistem' },
    { id: 'admin_log', label: 'Audit Log', icon: 'fa-clipboard-list', url: 'Admin Sistem/audit-log.html', cat: 'Admin Sistem' }
];

const MBLB_DEFAULT_RBAC = {
    'Bidang Pendaftaran': ['pendaftaran_dashboard', 'pendaftaran_terima_berkas', 'pendaftaran_berkas_online'],
    'Staff Lapangan': ['lapangan_dashboard', 'lapangan_input', 'lapangan_riwayat'],
    'Admin Penetapan': ['penetapan_dashboard', 'penetapan_rekap', 'penetapan_nota', 'penetapan_laporan'],
    'Kabid Penetapan': ['kabid_dashboard', 'kabid_penugasan', 'kabid_monitoring'],
    'Bidang Penagihan': ['penagihan_dashboard', 'penagihan_input_pembayaran', 'penagihan_billing', 'penagihan_laporan'],
    'Kepala Dinas': ['kadis_dashboard', 'kadis_laporan'],
    'Admin Sistem': ['admin_dashboard', 'admin_master', 'admin_user', 'admin_config', 'admin_hak_akses', 'admin_laporan', 'admin_log']
};

function getRbacConfig() {
    return JSON.parse(localStorage.getItem('mblb_rbac') || JSON.stringify(MBLB_DEFAULT_RBAC));
}

function renderDynamicSidebar() {
    const navEl = document.querySelector('nav.sidebar-menu');
    if (!navEl) return;

    const user = getCurrentUser();
    const userRole = user.role || 'Admin Sistem';
    const activeRbac = getRbacConfig()[userRole] || [];

    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const baseUrl = '../';

    let html = '';

    MBLB_MENU_MASTER.forEach(menu => {
        if (activeRbac.includes(menu.id)) {
            const isMatch = currentPath.endsWith(menu.url) || currentPath.endsWith(menu.url.split('/').pop());
            const activeClass = isMatch ? 'bg-indigo-700 font-bold' : 'hover:bg-indigo-700';

            html += `
                <a href="${baseUrl}${menu.url}" class="flex items-center gap-3 px-4 py-3 rounded-lg ${activeClass} transition-smooth text-white group">
                    <i class="fa-solid ${menu.icon} w-5 text-center group-hover:scale-110 transition-transform"></i>
                    <span class="font-medium">${menu.label}</span>
                </a>
            `;
        }
    });

    html += `
        <div class="mt-auto pt-4 border-t border-indigo-700 space-y-1">
            <button onclick="resetPrototypeData()" class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-amber-500/20 transition-smooth text-left text-amber-200 group">
                <i class="fa-solid fa-rotate w-5 text-center group-hover:rotate-180 transition-transform duration-500"></i>
                <span class="font-medium text-xs uppercase tracking-wider">Reset Data Dummy</span>
            </button>
            <button onclick="logout()" class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 transition-smooth text-left text-red-300 group">
                <i class="fa-solid fa-right-from-bracket w-5 text-center group-hover:-translate-x-1 transition-transform"></i>
                <span class="font-medium">Keluar</span>
            </button>
        </div>
    `;

    navEl.innerHTML = html;
}

// Call on every page automatically if the nav element exists
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.replace(/\\/g, '/');
    // Only run if not on login/Wajib Pajak portals which don't use this strict RBAC
    if (document.querySelector('nav.sidebar-menu') && !path.includes('Wajib%20Pajak') && !path.includes('Wajib Pajak')) {
        renderDynamicSidebar();
        checkAuth();
    }
});
