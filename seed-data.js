// MBLB Seed Data - Demo Data for Prototype

// ========================================
// User Accounts
// ========================================

const USERS = {
    'fo': {
        username: 'fo',
        password: 'fo123',
        role: 'Bidang Pendaftaran',
        nama: 'Dewi Sartika',
        nip: '199003152015012001'
    },
    'staff': {
        username: 'staff',
        password: 'staff123',
        role: 'Staff Lapangan',
        nama: 'Budi Santoso',
        nip: '198505152010011001'
    },
    'admin': {
        username: 'admin',
        password: 'admin123',
        role: 'Admin Penetapan',
        nama: 'Seto Maheral, SE, M.Si',
        nip: '198009292010011017'
    },
    'kabid': {
        username: 'kabid',
        password: 'kabid123',
        role: 'Kabid Penetapan',
        nama: 'Parlyndungan Sianturi, SE, MH',
        nip: '197608192010011007'
    },
    'wp': {
        username: 'wp',
        password: 'wp123',
        role: 'Wajib Pajak',
        nama: 'Widia Asahara',
        npwpd: 'P.1.0002818.13.16',
        namaUsaha: 'Uwah Store (Quarry Pasir)'
    },
    'penagihan': {
        username: 'penagihan',
        password: 'penagihan123',
        role: 'Bidang Penagihan',
        nama: 'Rian Hidayat, SE',
        nip: '198801122010011005'
    },
    'kadis': {
        username: 'kadis',
        password: 'kadis123',
        role: 'Kepala Dinas',
        nama: 'Ir. H. Syamsul Bahri, M.Si',
        nip: '196712051995031003'
    },
    'admin-sistem': {
        username: 'sysadmin',
        password: 'admin123',
        role: 'Admin Sistem',
        nama: 'Administrator',
        nip: '-'
    }
};

// ========================================
// Mineral Types & Rates
// ========================================

const JENIS_MINERAL = [
    { id: 'tanah-urug', nama: 'Tanah Urug', tarif: 15000, tarifPajak: 20, satuan: 'm³', kodeRekening: '4.1.1.06.01.01' },
    { id: 'batu-belah', nama: 'Batu Belah', tarif: 25000, tarifPajak: 20, satuan: 'm³', kodeRekening: '4.1.1.06.02.01' },
    { id: 'pasir', nama: 'Pasir', tarif: 20000, tarifPajak: 20, satuan: 'm³', kodeRekening: '4.1.1.06.08.01' },
    { id: 'kerikil', nama: 'Kerikil', tarif: 18000, tarifPajak: 20, satuan: 'm³', kodeRekening: '4.1.1.06.43.01' },
    { id: 'sirtu', nama: 'Sirtu (Pasir Batu)', tarif: 22000, tarifPajak: 20, satuan: 'm³', kodeRekening: '4.1.1.06.45.01' }
];

// ========================================
// Konfigurasi Sistem
// ========================================

const KONFIGURASI_SISTEM = {
    bankPenerima: 'BANK BENGKULU CABANG TAIS',
    noRekening: '303.01.01.10002.6',
    namaDinas: 'Badan Pendapatan Daerah',
    namaKabupaten: 'Kabupaten Seluma',
    alamatDinas: 'Jln. Soekarno-Hatta Pematang Aur Tais Kode Pos 38576',
    opsenProvinsi: 25,
    opsenAktif: true,
    namaProvinsi: 'Provinsi Bengkulu',
    tarifPajakPersen: 20,
    dendaBungaPersen: 2,
    dendaMaxBulan: 24,
    jatuhTempoHari: 30,
    pejabatKabid: 'PARLYNDUNGAN SIANTURI, SE, MH',
    nipKabid: '197608192010011007',
    jabatanKabid: 'Kepala Bidang Penetapan',
    pejabatKadis: 'Ir. H. SYAMSUL BAHRI, M.Si',
    nipKadis: '196803151993031005',
    jabatanKadis: 'Kepala Badan Pendapatan Daerah',
    pejabatStaf: 'RINA HARTATI',
    nipStaf: '-',
    jabatanStaf: 'Staf Penetapan'
};

// ========================================
// Riwayat Target PAD
// ========================================

const RIWAYAT_PAD = [
    {
        tahun: 2024,
        target: 950000000,
        realisasi: 876500000,
        status: 'closed'
    },
    {
        tahun: 2025,
        target: 1000000000,
        realisasi: 847250000,
        status: 'closed'
    },
    {
        tahun: 2026,
        target: 1200000000,
        realisasi: 847250000,
        status: 'active'
    }
];

// ========================================
// Taxpayers (Wajib Pajak)
// ========================================

const WAJIB_PAJAK = [
    {
        id: 'WP001',
        npwpd: 'P.1.0002818.13.16',
        nama: 'Widia Asahara',
        namaUsaha: 'Uwah Store (Quarry Pasir)',
        alamat: 'Desa Gunung Mesir, Kec. Seluma',
        telepon: '081234567890',
        email: 'widia@uwahstore.com'
    },
    {
        id: 'WP002',
        npwpd: 'P.1.0002819.13.16',
        nama: 'Ahmad Yani',
        namaUsaha: 'CV Batu Jaya (Quarry Batu Belah)',
        alamat: 'Desa Tais, Kec. Seluma',
        telepon: '081234567891',
        email: 'ahmad@batujaya.com'
    },
    {
        id: 'WP003',
        npwpd: 'P.1.0002820.13.16',
        nama: 'Siti Nurhaliza',
        namaUsaha: 'UD Pasir Putih',
        alamat: 'Desa Air Periukan, Kec. Seluma',
        telepon: '081234567892',
        email: 'siti@pasirputih.com'
    },
    {
        id: 'WP004',
        npwpd: 'P.1.0002821.13.16',
        nama: 'H. Sudirman',
        namaUsaha: 'PT Seluma Makmur (Tanah Urug)',
        alamat: 'Kec. Sukaraja, Seluma',
        telepon: '081234567893',
        email: 'sudirman@selumamakmur.com'
    },
    {
        id: 'WP005',
        npwpd: 'P.1.0002822.13.16',
        nama: 'Indra Gunawan',
        namaUsaha: 'CV Fajar Timur (Sirtu)',
        alamat: 'Kec. Talo, Seluma',
        telepon: '081234567894',
        email: 'indra@fajartimur.com'
    }
];

// ========================================
// Daily Reports (Laporan Harian)
// ========================================

const LAPORAN_HARIAN = [
    // FEBRUARY 2026 RECORDS (To match REKAP_BULANAN '2026-02')
    { id: 'LH_FEB_01', tanggal: '2026-02-02', wpId: 'WP001', lokasi: 'Area Tambang Pasir, Desa Gunung Mesir', foto: 'truck-feb1.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 50, satuan: 'm³' }] },
    { id: 'LH_FEB_02', tanggal: '2026-02-05', wpId: 'WP001', lokasi: 'Area Tambang Pasir, Desa Gunung Mesir', foto: 'truck-feb2.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 100, satuan: 'm³' }] },
    { id: 'LH_FEB_03', tanggal: '2026-02-12', wpId: 'WP001', lokasi: 'Area Tambang Pasir, Desa Gunung Mesir', foto: 'truck-feb3.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 150, satuan: 'm³' }] },
    { id: 'LH_FEB_04', tanggal: '2026-02-18', wpId: 'WP001', lokasi: 'Area Tambang Pasir, Desa Gunung Mesir', foto: 'truck-feb4.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 150, satuan: 'm³' }] }, // Total 450
    { id: 'LH_FEB_05', tanggal: '2026-02-03', wpId: 'WP002', lokasi: 'Bukit Batu, Tais', foto: 'truck-feb5.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'batu-belah', nama: 'Batu Belah', volume: 120, satuan: 'm³' }] },
    { id: 'LH_FEB_06', tanggal: '2026-02-15', wpId: 'WP002', lokasi: 'Bukit Batu, Tais', foto: 'truck-feb6.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'batu-belah', nama: 'Batu Belah', volume: 200, satuan: 'm³' }] }, // Total 320
    { id: 'LH_FEB_07', tanggal: '2026-02-08', wpId: 'WP003', lokasi: 'Tambang Air Periukan', foto: 'truck-feb7.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 250, satuan: 'm³' }] },
    { id: 'LH_FEB_08', tanggal: '2026-02-22', wpId: 'WP003', lokasi: 'Tambang Air Periukan', foto: 'truck-feb8.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 250, satuan: 'm³' }] }, // Total 500
    { id: 'LH_FEB_09', tanggal: '2026-02-10', wpId: 'WP004', lokasi: 'Lahan Pembangunan Sukaraja', foto: 'truck-feb9.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'tanah-urug', nama: 'Tanah Urug', volume: 500, satuan: 'm³' }] },
    { id: 'LH_FEB_10', tanggal: '2026-02-25', wpId: 'WP004', lokasi: 'Lahan Pembangunan Sukaraja', foto: 'truck-feb10.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'tanah-urug', nama: 'Tanah Urug', volume: 500, satuan: 'm³' }] }, // Total 1000

    // MARCH 2026 RECORDS (To match REKAP_BULANAN '2026-03')
    { id: 'LH001', tanggal: '2026-03-01', wpId: 'WP001', lokasi: 'Area Tambang Pasir, Desa Gunung Mesir', foto: 'truck-1.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 8, satuan: 'm³' }] },
    { id: 'LH002', tanggal: '2026-03-02', wpId: 'WP001', lokasi: 'Area Tambang Pasir, Desa Gunung Mesir', foto: 'truck-2.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 12, satuan: 'm³' }] },
    { id: 'LH007', tanggal: '2026-03-16', wpId: 'WP001', lokasi: 'Area Tambang Pasir, Desa Gunung Mesir', foto: 'truck-7.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 20, satuan: 'm³' }] }, // Total 40
    { id: 'LH003', tanggal: '2026-03-05', wpId: 'WP002', lokasi: 'Bukit Batu, Tais', foto: 'truck-3.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'batu-belah', nama: 'Batu Belah', volume: 24, satuan: 'm³' }] },
    { id: 'LH008', tanggal: '2026-03-18', wpId: 'WP002', lokasi: 'Bukit Batu, Tais', foto: 'truck-8.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'batu-belah', nama: 'Batu Belah', volume: 40, satuan: 'm³' }] }, // Total 64
    { id: 'LH004', tanggal: '2026-03-10', wpId: 'WP004', lokasi: 'Lahan Pembangunan Sukaraja', foto: 'truck-4.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'tanah-urug', nama: 'Tanah Urug', volume: 50, satuan: 'm³' }, { id: 'sirtu', nama: 'Sirtu (Pasir Batu)', volume: 15, satuan: 'm³' }] }, // MULTI MATERIAL EXAMPLE
    { id: 'LH009', tanggal: '2026-03-20', wpId: 'WP004', lokasi: 'Lahan Pembangunan Sukaraja', foto: 'truck-9.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'tanah-urug', nama: 'Tanah Urug', volume: 100, satuan: 'm³' }] }, // Total 150 + 15 sirtu
    { id: 'LH005', tanggal: '2026-03-12', wpId: 'WP003', lokasi: 'Tambang Air Periukan', foto: 'truck-5.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 30, satuan: 'm³' }] },
    { id: 'LH010', tanggal: '2026-03-22', wpId: 'WP003', lokasi: 'Tambang Air Periukan', foto: 'truck-12.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 45, satuan: 'm³' }] },
    { id: 'LH011', tanggal: '2026-03-24', wpId: 'WP003', lokasi: 'Tambang Air Periukan', foto: 'truck-13.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 55, satuan: 'm³' }] },
    { id: 'LH012', tanggal: '2026-03-26', wpId: 'WP003', lokasi: 'Tambang Air Periukan', foto: 'truck-14.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'pasir', nama: 'Pasir', volume: 60, satuan: 'm³' }] },
    { id: 'LH013', tanggal: '2026-03-05', wpId: 'WP005', lokasi: 'Kec. Talo, Seluma', foto: 'truck-15.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'sirtu', nama: 'Sirtu', volume: 120, satuan: 'm³' }, { id: 'pasir', nama: 'Pasir', volume: 50, satuan: 'm³' }] },
    { id: 'LH014', tanggal: '2026-03-12', wpId: 'WP005', lokasi: 'Kec. Talo, Seluma', foto: 'truck-16.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'sirtu', nama: 'Sirtu', volume: 200, satuan: 'm³' }] },
    { id: 'LH015', tanggal: '2026-03-25', wpId: 'WP005', lokasi: 'Kec. Talo, Seluma', foto: 'truck-17.jpg', staffId: 'staff', status: 'verified', items: [{ id: 'sirtu', nama: 'Sirtu', volume: 180, satuan: 'm³' }] }
];

// ========================================
// Monthly Recaps (Rekapitulasi Bulanan)
// ========================================

const REKAP_BULANAN = [
    { id: 'RB_FEB_01', periode: '2026-02', wpId: 'WP001', jenisMineral: 'pasir', totalVolume: 450, tarif: 20000, nilaiJual: 9000000, pajak: 1800000, status: 'approved' },
    { id: 'RB_FEB_02', periode: '2026-02', wpId: 'WP002', jenisMineral: 'batu-belah', totalVolume: 320, tarif: 25000, nilaiJual: 8000000, pajak: 1600000, status: 'approved' },
    { id: 'RB_FEB_03', periode: '2026-02', wpId: 'WP003', jenisMineral: 'pasir', totalVolume: 500, tarif: 20000, nilaiJual: 10000000, pajak: 2000000, status: 'approved' },
    { id: 'RB_FEB_04', periode: '2026-02', wpId: 'WP004', jenisMineral: 'tanah-urug', totalVolume: 1000, tarif: 15000, nilaiJual: 15000000, pajak: 3000000, status: 'approved' },
    { id: 'RB_MAR_01', periode: '2026-03', wpId: 'WP001', jenisMineral: 'pasir', totalVolume: 40, tarif: 20000, nilaiJual: 800000, pajak: 160000, status: 'approved' },
    { id: 'RB_MAR_02', periode: '2026-03', wpId: 'WP002', jenisMineral: 'batu-belah', totalVolume: 64, tarif: 25000, nilaiJual: 1600000, pajak: 320000, status: 'approved' },
    { id: 'RB_MAR_03', periode: '2026-03', wpId: 'WP004', jenisMineral: 'tanah-urug', totalVolume: 150, tarif: 15000, nilaiJual: 2250000, pajak: 450000, status: 'pending_verification' },
    { id: 'RB_MAR_04', periode: '2026-03', wpId: 'WP003', jenisMineral: 'pasir', totalVolume: 190, tarif: 20000, nilaiJual: 3800000, pajak: 760000, status: 'pending_verification' },
    { id: 'RB_MAR_05', periode: '2026-03', wpId: 'WP005', jenisMineral: 'multi', totalVolume: 550, tarif: 0, nilaiJual: 11000000, pajak: 2200000, status: 'pending_verification' }
];

// ========================================
// Draft SPTPD (Surat Pemberitahuan Pajak Daerah)
// ========================================

const DRAFT_SPTPD = [
    { id: 'SPTPD_FEB_01', nomor: '001/SPTPD/MBLB/III/2026', tanggal: '2026-03-02', masaPajak: 'Februari 2026', tahunPajak: '2026', wpId: 'WP001', rekapId: 'RB_FEB_01', nilaiJual: 9000000, targetDenda: 0, total: 1800000, jatuhTempo: '2026-04-02', status: 'approved', riwayatTeguran: 0 },
    { id: 'SPTPD_FEB_02', nomor: '002/SPTPD/MBLB/III/2026', tanggal: '2026-03-02', masaPajak: 'Februari 2026', tahunPajak: '2026', wpId: 'WP002', rekapId: 'RB_FEB_02', nilaiJual: 8000000, targetDenda: 0, total: 1600000, jatuhTempo: '2026-04-02', status: 'approved', riwayatTeguran: 0 },
    { id: 'SPTPD_FEB_03', nomor: '003/SPTPD/MBLB/III/2026', tanggal: '2026-03-03', masaPajak: 'Februari 2026', tahunPajak: '2026', wpId: 'WP003', rekapId: 'RB_FEB_03', nilaiJual: 10000000, targetDenda: 0, total: 2000000, jatuhTempo: '2026-04-03', status: 'pending', riwayatTeguran: 0 },
    { id: 'SPTPD_FEB_04', nomor: '004/SPTPD/MBLB/III/2026', tanggal: '2026-03-03', masaPajak: 'Februari 2026', tahunPajak: '2026', wpId: 'WP004', rekapId: 'RB_FEB_04', nilaiJual: 15000000, targetDenda: 0, total: 3000000, jatuhTempo: '2026-04-03', status: 'pending', riwayatTeguran: 0 },
    { id: 'SPTPD_MAR_01', nomor: '005/SPTPD/MBLB/IV/2026', tanggal: '2026-04-01', masaPajak: 'Maret 2026', tahunPajak: '2026', wpId: 'WP001', rekapId: 'RB_MAR_01', nilaiJual: 800000, targetDenda: 0, total: 160000, jatuhTempo: '2026-05-01', status: 'pending', riwayatTeguran: 0 },
    { id: 'SPTPD_MAR_02', nomor: '006/SPTPD/MBLB/IV/2026', tanggal: '2026-04-01', masaPajak: 'Maret 2026', tahunPajak: '2026', wpId: 'WP002', rekapId: 'RB_MAR_02', nilaiJual: 1600000, targetDenda: 0, total: 320000, jatuhTempo: '2026-05-01', status: 'pending', riwayatTeguran: 0 },
    { id: 'SPTPD_LAMA_01', nomor: '045/SPTPD/MBLB/XII/2025', tanggal: '2025-12-05', masaPajak: 'November 2025', tahunPajak: '2025', wpId: 'WP005', rekapId: 'RB_NOV_01', nilaiJual: 25000000, targetDenda: 0, total: 5000000, jatuhTempo: '2026-01-05', status: 'approved', riwayatTeguran: 2 }
];

// ========================================
// SSPD (Surat Setoran Pajak Daerah)
// ========================================

const SSPD = [
    { id: 'SSPD001', nomor: '001/SSPD/MBLB/III/2026', tanggal: '2026-03-05', sptpdId: 'SPTPD_FEB_01', wpId: 'WP001', jumlahBayar: 1800000, metodeBayar: 'Transfer Bank', bank: 'BANK BENGKULU', ntb: 'NTB992837482', status: 'success' },
    { id: 'SSPD002', nomor: '002/SSPD/MBLB/III/2026', tanggal: '2026-03-08', sptpdId: 'SPTPD_FEB_02', wpId: 'WP002', jumlahBayar: 1600000, metodeBayar: 'Kas Daerah', bank: 'BANK BENGKULU', ntb: 'NTB992837483', status: 'success' }
];

// ========================================
// Assignments (Penugasan)
// ========================================

const PENUGASAN = [
    {
        id: 'TGS001',
        staffId: 'staff',
        wpId: 'WP001',
        taskType: 'Pengecekan PIT Tambang',
        deadline: '2026-03-30',
        status: 'completed',
        notes: 'Cek akses jalan keluar masuk truk.'
    },
    {
        id: 'TGS002',
        staffId: 'staff',
        wpId: 'WP002',
        taskType: 'Verifikasi Volume Batu',
        deadline: '2026-03-25',
        status: 'on-progress',
        notes: 'Pastikan alat timbang berfungsi.'
    },
    {
        id: 'TGS003',
        staffId: 'staff',
        wpId: 'WP004',
        taskType: 'Survey Lokasi Baru',
        deadline: '2026-04-01',
        status: 'pending',
        notes: 'Ambil koordinat GPS lokasi tambang baru.'
    },
    {
        id: 'TGS004',
        staffId: 'staff2',
        wpId: 'WP005',
        taskType: 'Pengecekan Sirtu',
        deadline: '2026-03-28',
        status: 'pending',
        notes: 'Laporan muatan mingguan.'
    }
];

// ========================================
// Initialize LocalStorage
// ========================================

function initializeSeedData() {
    if (!localStorage.getItem('mblb_init_v10')) {
        localStorage.setItem('mblb_users', JSON.stringify(USERS));
        localStorage.setItem('mblb_jenis_mineral', JSON.stringify(JENIS_MINERAL));
        localStorage.setItem('mblb_wajib_pajak', JSON.stringify(WAJIB_PAJAK));
        localStorage.setItem('mblb_laporan_harian', JSON.stringify(LAPORAN_HARIAN));
        localStorage.setItem('mblb_rekap_bulanan', JSON.stringify(REKAP_BULANAN));
        localStorage.setItem('mblb_draft_sptpd', JSON.stringify(DRAFT_SPTPD));
        localStorage.setItem('mblb_sspd', JSON.stringify(SSPD));
        localStorage.setItem('mblb_penugasan', JSON.stringify(PENUGASAN));
        localStorage.setItem('mblb_konfigurasi', JSON.stringify(KONFIGURASI_SISTEM));
        localStorage.setItem('mblb_riwayat_pad', JSON.stringify(RIWAYAT_PAD));
        localStorage.setItem('mblb_init_v10', 'true');

        console.log('✅ MBLB seed data initialized (v10) - ' + REKAP_BULANAN.length + ' recaps.');
    }
}

// Auto-initialize on load
if (typeof window !== 'undefined') {
    initializeSeedData();
}

// ========================================
// Helper Functions
// ========================================

function getWajibPajakById(id) {
    const wp = JSON.parse(localStorage.getItem('mblb_wajib_pajak') || '[]');
    return wp.find(w => w.id === id);
}

function getJenisMineralById(id) {
    const jm = JSON.parse(localStorage.getItem('mblb_jenis_mineral') || '[]');
    return jm.find(j => j.id === id);
}

function getLaporanHarianByWP(wpId) {
    const lh = JSON.parse(localStorage.getItem('mblb_laporan_harian') || '[]');
    return lh.filter(l => l.wpId === wpId);
}

function getRekapBulananByPeriode(periode) {
    const rb = JSON.parse(localStorage.getItem('mblb_rekap_bulanan') || '[]');
    return rb.filter(r => r.periode === periode);
}

function getSPTPDByWP(wpId) {
    const sptpd = JSON.parse(localStorage.getItem('mblb_draft_sptpd') || '[]');
    return sptpd.filter(s => s.wpId === wpId);
}
