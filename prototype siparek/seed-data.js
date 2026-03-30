/**
 * SIPAREK - Seed Data untuk Demo
 * File ini berisi semua data dummy untuk demo sistem
 * Jalankan seed-data.html untuk reset/initialize data
 */

const SEED_DATA = {
    // Master Users
    users: [
        { id: 'U001', npwpd: '1234567890120001', nik: '3201234567891234', nama: 'Ahmad Pratama', telepon: '081234567890', email: 'ahmad@example.com', role: 'wajib-pajak' },
        { id: 'U002', name: 'Budi Santoso', role: 'admin', username: 'admin' },
        { id: 'U003', name: 'Citra Dewi', role: 'petugas-lapangan', username: 'petugas' },
        { id: 'U004', name: 'Dewi Kartika', role: 'penetapan', username: 'penetapan' }, // Was Verifikator
        { id: 'U005', name: 'Eko Prasetyo', role: 'kasubbid', username: 'kasubbid' },
        { id: 'U006', name: 'Fajar Nugraha', role: 'kabid', username: 'kabid' },
        { id: 'U007', name: 'Gita Permata', role: 'sekban', username: 'sekban' },
        { id: 'U008', name: 'Hadi Wibowo', role: 'kaban', username: 'kaban' },
        { id: 'U009', name: 'Sari Wulandari', role: 'penagihan', username: 'penagihan' } // Was Bendahara
    ],

    // Objek Reklame
    reklame: [
        {
            id: 'R001',
            npwpd: '1234567890120001',
            nama_pemilik: 'Ahmad Pratama',
            kategori: 'videotron',
            jenis: 'Videotron LED',
            lokasi: 'Jl. Sudirman No. 123',
            kelas_jalan: 'protokol-a',
            ukuran_panjang: 10,
            ukuran_lebar: 5,
            sisi: 2,
            jumlah: 1,
            status: 'aktif',
            tanggal_daftar: '2026-01-15',
            masa_berlaku_mulai: '2026-01-15',
            masa_berlaku_selesai: '2026-12-31',
            koordinat: {
                latitude: -3.80123,
                longitude: 102.29384
            }
        },
        {
            id: 'R002',
            npwpd: '1234567890120001',
            nama_pemilik: 'Ahmad Pratama',
            kategori: 'billboard',
            jenis: 'Billboard Outdoor',
            lokasi: 'Jl. Raya Bogor KM 15',
            kelas_jalan: 'protokol-b',
            ukuran_panjang: 8,
            ukuran_lebar: 4,
            sisi: 2,
            jumlah: 1,
            status: 'aktif',
            tanggal_daftar: '2026-01-20',
            masa_berlaku_mulai: '2026-02-01',
            masa_berlaku_selesai: '2026-12-31',
            koordinat: {
                latitude: -3.79555,
                longitude: 102.28888
            }
        },
        {
            id: 'R003',
            npwpd: '1234567890120002',
            nama_pemilik: 'Siti Nurhaliza',
            kategori: 'baliho',
            jenis: 'Baliho',
            lokasi: 'Jl. Gatot Subroto No. 45',
            kelas_jalan: 'protokol-a',
            ukuran_panjang: 6,
            ukuran_lebar: 3,
            sisi: 1,
            jumlah: 1,
            status: 'aktif',
            tanggal_daftar: '2026-01-10',
            masa_berlaku_mulai: '2026-01-10',
            masa_berlaku_selesai: '2026-12-31'
        },
        {
            id: 'R004',
            npwpd: '1234567890120003',
            nama_pemilik: 'Budi Santoso',
            kategori: 'spanduk',
            jenis: 'Spanduk',
            lokasi: 'Jl. Merdeka No. 78',
            kelas_jalan: 'lingkungan',
            ukuran_panjang: 5,
            ukuran_lebar: 1,
            sisi: 1,
            jumlah: 2,
            status: 'aktif',
            tanggal_daftar: '2026-02-01',
            masa_berlaku_mulai: '2026-02-01',
            masa_berlaku_selesai: '2026-06-30'
        }
    ],

    // Berita Acara Survey (Sample)

    // Tagihan
    tagihan: [
        {
            id: 'SKR-001',
            npwpd: '1234567890120001',
            nama_wp: 'Ahmad Pratama',
            objek_id: 'R001',
            objek: 'Videotron LED - Jl. Sudirman',
            periode: 'Jan 2026',
            masa_pajak_mulai: '2026-01-01',
            masa_pajak_selesai: '2026-01-31',
            nominal: 135000000,
            status: 'belum_bayar',
            tanggal_tagihan: '2026-01-15',
            jatuh_tempo: '2026-02-15'
        },
        {
            id: 'SKR-002',
            npwpd: '1234567890120001',
            nama_wp: 'Ahmad Pratama',
            objek_id: 'R002',
            objek: 'Billboard Outdoor - Jl. Raya',
            periode: 'Feb 2026',
            masa_pajak_mulai: '2026-02-01',
            masa_pajak_selesai: '2026-02-28',
            nominal: 54000000,
            status: 'belum_bayar',
            tanggal_tagihan: '2026-02-01',
            jatuh_tempo: '2026-03-01'
        },
        {
            id: 'SKR-003',
            npwpd: '1234567890120002',
            nama_wp: 'Siti Nurhaliza',
            objek_id: 'R003',
            objek: 'Baliho - Jl. Gatot Subroto',
            periode: 'Jan 2026',
            masa_pajak_mulai: '2026-01-01',
            masa_pajak_selesai: '2026-01-31',
            nominal: 25000000,
            status: 'belum_bayar',
            tanggal_tagihan: '2026-01-10',
            jatuh_tempo: '2026-02-10'
        },
        {
            id: 'SKR-004',
            npwpd: '1234567890120003',
            nama_wp: 'Budi Santoso',
            objek_id: 'R004',
            objek: 'Spanduk - Jl. Merdeka',
            periode: 'Feb 2026',
            masa_pajak_mulai: '2026-02-01',
            masa_pajak_selesai: '2026-02-28',
            nominal: 450000,
            status: 'lunas',
            tanggal_tagihan: '2026-02-01',
            tanggal_bayar: '2026-02-05',
            metode_bayar: 'qris'
        }
    ],

    // Antrian Front Office
    antrian: [
        {
            id: 'A-012',
            nomor: 'A-012',
            npwpd: '1234567890120001',
            nama: 'Ahmad Pratama',
            jenis: 'Videotron',
            kategori: 'baru',
            status: 'validasi',
            waktu: '10:30',
            tanggal: '2026-02-09'
        },
        {
            id: 'A-011',
            nomor: 'A-011',
            npwpd: '1234567890120002',
            nama: 'Siti Nurhaliza',
            jenis: 'Billboard',
            kategori: 'baru',
            status: 'selesai',
            waktu: '10:15',
            tanggal: '2026-02-09'
        },
        {
            id: 'A-010',
            nomor: 'A-010',
            npwpd: '1234567890120003',
            nama: 'Budi Santoso',
            jenis: 'Spanduk',
            kategori: 'perpanjangan',
            status: 'selesai',
            waktu: '09:45',
            tanggal: '2026-02-09'
        }
    ],

    // Tugas Surveyor
    tugas_survey: [
        {
            id: 'TS-001',
            nomor: 'TS-001',
            objek: 'Videotron LED - Jl. Sudirman No. 123',
            pemohon: 'Ahmad Pratama',
            kategori: 'videotron',
            lokasi: 'Jl. Sudirman No. 123',
            koordinat: '-6.2088, 106.8456',
            prioritas: 'tinggi',
            status: 'pending',
            deadline: '2026-02-12',
            tanggal_tugas: '2026-02-09'
        },
        {
            id: 'TS-002',
            nomor: 'TS-002',
            objek: 'Baliho - Jl. Gatot Subroto No. 45',
            pemohon: 'Siti Nurhaliza',
            kategori: 'baliho',
            lokasi: 'Jl. Gatot Subroto No. 45',
            koordinat: '-6.2297, 106.8301',
            prioritas: 'sedang',
            status: 'dalam_proses',
            deadline: '2026-02-15',
            tanggal_tugas: '2026-02-08'
        },
        {
            id: 'TS-003',
            nomor: 'TS-003',
            objek: 'Billboard - Jl. Raya Bogor KM 15',
            pemohon: 'Ahmad Pratama',
            kategori: 'billboard',
            lokasi: 'Jl. Raya Bogor KM 15',
            koordinat: '-6.3155, 106.8610',
            prioritas: 'rendah',
            status: 'selesai',
            deadline: '2026-02-10',
            tanggal_tugas: '2026-02-05',
            tanggal_selesai: '2026-02-08'
        }
    ],

    // Berkas Verifikator
    berkas_verifikasi: [
        {
            id: 'BV-001',
            nomor: 'BV-001',
            pemohon: 'Ahmad Pratama',
            npwpd: '1234567890120001',
            objek: 'Videotron LED - Jl. Sudirman',
            jenis: 'Pendaftaran Baru',
            status: 'menunggu',
            tanggal_masuk: '2026-02-09',
            prioritas: 'tinggi'
        },
        {
            id: 'BV-002',
            nomor: 'BV-002',
            pemohon: 'Siti Nurhaliza',
            npwpd: '1234567890120002',
            objek: 'Baliho - Jl. Gatot Subroto',
            jenis: 'Perpanjangan',
            status: 'menunggu_survey',
            tanggal_masuk: '2026-02-08',
            prioritas: 'sedang'
        },
        {
            id: 'BV-003',
            nomor: 'BV-003',
            pemohon: 'Budi Santoso',
            npwpd: '1234567890120003',
            objek: 'Spanduk - Jl. Merdeka',
            jenis: 'Perubahan Data',
            status: 'disetujui',
            tanggal_masuk: '2026-02-05',
            tanggal_selesai: '2026-02-07',
            prioritas: 'rendah'
        }
    ],

    // Approval Kepala Bidang
    approval_list: [
        {
            id: 'AP-001',
            nomor: 'AP-001',
            pemohon: 'Ahmad Pratama',
            objek: 'Videotron LED - Jl. Sudirman',
            nilai_pajak: 135000000,
            diajukan_oleh: 'Dewi Kartika (Verifikator)',
            status: 'menunggu',
            tanggal_pengajuan: '2026-02-09',
            prioritas: 'tinggi'
        },
        {
            id: 'AP-002',
            nomor: 'AP-002',
            pemohon: 'Siti Nurhaliza',
            objek: 'Baliho - Jl. Gatot Subroto',
            nilai_pajak: 25000000,
            diajukan_oleh: 'Dewi Kartika (Verifikator)',
            status: 'disetujui',
            tanggal_pengajuan: '2026-02-08',
            tanggal_approval: '2026-02-09',
            prioritas: 'sedang'
        }
    ],

    // Antrian Terbit Kode Billing (Bendahara)
    billing_requests: [
        {
            id: 'BR-001',
            nomor: 'AP-003',
            pemohon: 'CV. Maju Jaya',
            objek: 'Megatron - Alun-alun',
            nilai_pajak: 85000000,
            tanggal_approval_kabid: '2026-02-09',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-002',
            nomor: 'AP-004',
            pemohon: 'PT. Indosat Ooredoo',
            objek: 'Videotron - Simpang Lima',
            nilai_pajak: 45000000,
            tanggal_approval_kabid: '2026-02-08',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-003',
            nomor: 'AP-005',
            pemohon: 'Toko Emas Semar',
            objek: 'Spanduk - Pasar Besar',
            nilai_pajak: 750000,
            tanggal_approval_kabid: '2026-02-08',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-004',
            nomor: 'AP-006',
            pemohon: 'RM. Padang Sederhana',
            objek: 'Billboard - Jl. Ahmad Yani',
            nilai_pajak: 4500000,
            tanggal_approval_kabid: '2026-02-07',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-005',
            nomor: 'AP-007',
            pemohon: 'Klinik Kecantikan Athena',
            objek: 'Baliho - Jl. Sudirman',
            nilai_pajak: 2200000,
            tanggal_approval_kabid: '2026-02-07',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-006',
            nomor: 'AP-008',
            pemohon: 'Showroom Honda',
            objek: 'Neon Box - Depan Dealer',
            nilai_pajak: 1500000,
            tanggal_approval_kabid: '2026-02-06',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-007',
            nomor: 'AP-009',
            pemohon: 'Bank BRI',
            objek: 'Videotron - Alun-alun Timur',
            nilai_pajak: 35000000,
            tanggal_approval_kabid: '2026-02-06',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-008',
            nomor: 'AP-010',
            pemohon: 'Indomaret Point',
            objek: 'Shop Sign - Jl. Pahlawan',
            nilai_pajak: 3000000,
            tanggal_approval_kabid: '2026-02-05',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-009',
            nomor: 'AP-011',
            pemohon: 'Alfamidi',
            objek: 'Shop Sign - Jl. Diponegoro',
            nilai_pajak: 2800000,
            tanggal_approval_kabid: '2026-02-05',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-010',
            nomor: 'AP-012',
            pemohon: 'Samsung Store',
            objek: 'Billboard - Mall City Center',
            nilai_pajak: 8000000,
            tanggal_approval_kabid: '2026-02-04',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-011',
            nomor: 'AP-013',
            pemohon: 'Pizza Hut Delivery',
            objek: 'Neon Box - Jl. Kartini',
            nilai_pajak: 1200000,
            tanggal_approval_kabid: '2026-02-04',
            status: 'approved_by_kabid'
        },
        {
            id: 'BR-012',
            nomor: 'AP-014',
            pemohon: 'Kopi Kenangan',
            objek: 'Spanduk - Area Kampus',
            nilai_pajak: 300000,
            tanggal_approval_kabid: '2026-02-04',
            status: 'approved_by_kabid'
        }
    ],

    // Master Kategori Reklame
    kategori_reklame: [
        { id: 'KR01', nama: 'Videotron', deskripsi: 'Reklame digital dengan layar LED' },
        { id: 'KR02', nama: 'Billboard', deskripsi: 'Reklame papan besar permanen' },
        { id: 'KR03', nama: 'Baliho', deskripsi: 'Reklame papan semi-permanen/non-permanen' },
        { id: 'KR04', nama: 'Spanduk', deskripsi: 'Reklame kain rentang' },
        { id: 'KR05', nama: 'Megatron', deskripsi: 'Videotron ukuran raksasa' }
    ],

    // Master Tarif (Admin) - Updated to use Kelas Jalan IDs
    tarif: [
        { id: 'T001', kategori: 'Videotron', kelas_jalan: 'KJ01', tarif_per_m2: 2700000, satuan_waktu: 'bulan' },
        { id: 'T002', kategori: 'Videotron', kelas_jalan: 'KJ02', tarif_per_m2: 2160000, satuan_waktu: 'bulan' },
        { id: 'T003', kategori: 'Videotron', kelas_jalan: 'KJ06', tarif_per_m2: 1620000, satuan_waktu: 'bulan' },
        { id: 'T004', kategori: 'Billboard', kelas_jalan: 'KJ01', tarif_per_m2: 1687500, satuan_waktu: 'bulan' },
        { id: 'T005', kategori: 'Billboard', kelas_jalan: 'KJ02', tarif_per_m2: 1350000, satuan_waktu: 'bulan' },
        { id: 'T006', kategori: 'Billboard', kelas_jalan: 'KJ06', tarif_per_m2: 1012500, satuan_waktu: 'bulan' },
        { id: 'T007', kategori: 'Baliho', kelas_jalan: 'KJ01', tarif_per_m2: 1388888, satuan_waktu: 'bulan' },
        { id: 'T008', kategori: 'Baliho', kelas_jalan: 'KJ02', tarif_per_m2: 1111111, satuan_waktu: 'bulan' },
        { id: 'T009', kategori: 'Baliho', kelas_jalan: 'KJ06', tarif_per_m2: 833333, satuan_waktu: 'bulan' },
        { id: 'T010', kategori: 'Spanduk', kelas_jalan: 'KJ01', tarif_per_m2: 45000, satuan_waktu: 'bulan' },
        { id: 'T011', kategori: 'Spanduk', kelas_jalan: 'KJ02', tarif_per_m2: 36000, satuan_waktu: 'bulan' },
        { id: 'T012', kategori: 'Spanduk', kelas_jalan: 'KJ06', tarif_per_m2: 27000, satuan_waktu: 'bulan' }
    ],

    // Rekonsiliasi Bendahara
    rekonsiliasi: [
        {
            id: 'RK-001',
            tanggal: '2026-02-05',
            nomor_tagihan: 'SKR-004',
            nama_wp: 'Budi Santoso',
            nominal: 450000,
            metode: 'QRIS',
            ref_number: 'QRIS202602050001',
            status: 'terverifikasi'
        },
        {
            id: 'RK-002',
            tanggal: '2026-02-06',
            nomor_tagihan: 'SKR-005',
            nama_wp: 'Rina Permata',
            nominal: 85000000,
            metode: 'Transfer Bank',
            ref_number: 'TRF202602060001',
            status: 'pending'
        }
    ],

    // Stats for dashboards
    stats: {
        front_office: {
            berkas_masuk_hari_ini: 12,
            dalam_proses: 8,
            tervalidasi: 35,
            ditolak: 3
        },
        surveyor: {
            tugas_pending: 5,
            dalam_proses: 3,
            selesai_hari_ini: 2,
            total_tugas_bulan: 47
        },
        verifikator: {
            berkas_baru: 8,
            menunggu_survey: 12,
            disetujui_hari_ini: 5,
            ditolak: 2
        },
        kepala_bidang: {
            menunggu_approval: 4,
            pad_bulan_ini: 324500000,
            pad_target: 500000000,
            approval_hari_ini: 7
        },
        admin: {
            total_users: 234,
            total_objek: 156,
            total_tarif: 12,
            system_uptime: '99.9%'
        },
        bendahara: {
            pendapatan_hari_ini: 85450000,
            pendapatan_bulan: 324500000,
            pending_rekonsiliasi: 3,
            menunggu_billing: 1,
            total_transaksi: 89
        }
    },

    // Master Referensi (New)
    kelas_jalan: [
        { id: 'KJ01', nama: 'Protokol A', deskripsi: 'Jalan Utama Ibukota (Sudirman, Thamrin)' },
        { id: 'KJ02', nama: 'Protokol B', deskripsi: 'Jalan Penghubung Utama (Gatot Subroto, Rasuna Said)' },
        { id: 'KJ03', nama: 'Protokol C', deskripsi: 'Jalan Kolektor Primer' },
        { id: 'KJ04', nama: 'Ekonomi A', deskripsi: 'Kawasan Perdagangan Utama' },
        { id: 'KJ05', nama: 'Ekonomi B', deskripsi: 'Kawasan Perdagangan Sekunder' },
        { id: 'KJ06', nama: 'Lingkungan', deskripsi: 'Jalan Perumahan / Pemukiman' }
    ],

    faktor_sisi: [
        { jumlah: 1, faktor: 1.0, keterangan: 'Satu Muka' },
        { jumlah: 2, faktor: 1.5, keterangan: 'Dua Muka (Bolak-balik)' },
        { jumlah: 3, faktor: 2.0, keterangan: 'Tiga Muka (Segitiga)' },
        { jumlah: 4, faktor: 2.5, keterangan: 'Empat Muka (Box/Simpang 4)' }
    ],

    // Transaksi Harian (for Front Office daily report)
    transaksi_harian: [
        { no_transaksi: 'TRX-20260209-001', waktu: '08:15', nama_wp: 'Ahmad Pratama', npwpd: '1234567890120001', jenis_bayar: 'Tunai', metode: 'Tunai', jumlah: 1500000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-002', waktu: '08:32', nama_wp: 'Siti Nurhaliza', npwpd: '1234567890120002', jenis_bayar: 'Tunai', metode: 'Tunai', jumlah: 2500000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-003', waktu: '09:10', nama_wp: 'Budi Santoso', npwpd: '1234567890120003', jenis_bayar: 'Non-Tunai', metode: 'Transfer Bank', jumlah: 3000000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-004', waktu: '09:45', nama_wp: 'Dewi Lestari', npwpd: '1234567890120004', jenis_bayar: 'Tunai', metode: 'Tunai', jumlah: 750000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-005', waktu: '10:20', nama_wp: 'Eko Prasetyo', npwpd: '1234567890120005', jenis_bayar: 'Non-Tunai', metode: 'QRIS', jumlah: 1250000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-006', waktu: '10:55', nama_wp: 'Fitri Handayani', npwpd: '1234567890120006', jenis_bayar: 'Tunai', metode: 'Tunai', jumlah: 2000000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-007', waktu: '11:30', nama_wp: 'Gunawan Susilo', npwpd: '1234567890120007', jenis_bayar: 'Non-Tunai', metode: 'Transfer Bank', jumlah: 4500000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-008', waktu: '13:15', nama_wp: 'Hendra Wijaya', npwpd: '1234567890120008', jenis_bayar: 'Tunai', metode: 'Tunai', jumlah: 500000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-009', waktu: '13:50', nama_wp: 'Indah Permata', npwpd: '1234567890120009', jenis_bayar: 'Non-Tunai', metode: 'QRIS', jumlah: 1750000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-010', waktu: '14:25', nama_wp: 'Joko Widodo', npwpd: '1234567890120010', jenis_bayar: 'Non-Tunai', metode: 'Transfer Bank', jumlah: 3500000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-011', waktu: '15:00', nama_wp: 'Kartika Sari', npwpd: '1234567890120011', jenis_bayar: 'Tunai', metode: 'Tunai', jumlah: 1000000, petugas: 'Andi FrontOffice' },
        { no_transaksi: 'TRX-20260209-012', waktu: '15:35', nama_wp: 'Lukman Hakim', npwpd: '1234567890120012', jenis_bayar: 'Non-Tunai', metode: 'QRIS', jumlah: 2250000, petugas: 'Andi FrontOffice' }
    ]
};

// Function to seed/reset data
function seedData() {
    try {
        // Clear existing data
        localStorage.clear();

        // Set all seed data
        localStorage.setItem('siparek_users', JSON.stringify(SEED_DATA.users));
        localStorage.setItem('siparek_reklame', JSON.stringify(SEED_DATA.reklame));
        localStorage.setItem('siparek_tagihan', JSON.stringify(SEED_DATA.tagihan));
        localStorage.setItem('siparek_antrian', JSON.stringify(SEED_DATA.antrian));
        localStorage.setItem('siparek_tugas_survey', JSON.stringify(SEED_DATA.tugas_survey));
        localStorage.setItem('siparek_berkas_verifikasi', JSON.stringify(SEED_DATA.berkas_verifikasi));
        localStorage.setItem('siparek_approval_list', JSON.stringify(SEED_DATA.approval_list));
        localStorage.setItem('siparek_billing_requests', JSON.stringify(SEED_DATA.billing_requests));
        localStorage.setItem('siparek_tarif', JSON.stringify(SEED_DATA.tarif));
        localStorage.setItem('siparek_rekonsiliasi', JSON.stringify(SEED_DATA.rekonsiliasi));
        localStorage.setItem('siparek_stats', JSON.stringify(SEED_DATA.stats));
        localStorage.setItem('siparek_transaksi_harian', JSON.stringify(SEED_DATA.transaksi_harian));

        // New Master Data
        localStorage.setItem('siparek_kelas_jalan', JSON.stringify(SEED_DATA.kelas_jalan));
        localStorage.setItem('siparek_faktor_sisi', JSON.stringify(SEED_DATA.faktor_sisi));

        return {
            success: true,
            message: 'Data berhasil di-reset! Semua data demo telah diinisialisasi.'
        };
    } catch (error) {
        return {
            success: false,
            message: 'Gagal reset data: ' + error.message
        };
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SEED_DATA, seedData };
}
