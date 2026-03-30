// SIPAREK - Shared JavaScript Utilities

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
    const npwpdPattern = /^\d{16}$/;
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
// Logout Function
// ========================================

function logout() {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
        localStorage.clear();
        window.location.href = '../portal.html';
    }
}

// ========================================
// SIPAREK Tax Calculation Functions
// ========================================

// Rate Lookup Table (Dynamic from LocalStorage)
function getTarif(kategori, kelasJalan) {
    const tarifData = JSON.parse(localStorage.getItem('siparek_tarif')) || [];

    // Direct match (assuming IDs like KJ01 are passed)
    const item = tarifData.find(t =>
        t.kategori === kategori && t.kelas_jalan === kelasJalan
    );

    return item ? item.tarif_per_m2 : 0;
}

// NSR Calculation for Permanent Advertisement (Dynamic)
function calculateNSR(luas, rate, masaPajak, sisiTayang) {
    const config = JSON.parse(localStorage.getItem('siparek_config')) || {};
    const faktorSisi = parseFloat(config.nsr?.faktorSisi || 1.0);

    // Logic: Sisi 1 = 1x
    // Sisi Next = (Sisi-1) * Faktor
    // Total Multiplier = 1 + (Sisi - 1) * Faktor
    // Example: 2 Sisi, Faktor 1.0 => 1 + (1)*1 = 2x (Standard)
    // Example: 2 Sisi, Faktor 0.5 => 1 + (1)*0.5 = 1.5x (Discounted)

    // Ensure sisiTayang is at least 1
    const sisi = Math.max(1, sisiTayang);
    const multiplier = 1 + ((sisi - 1) * faktorSisi);

    return luas * rate * masaPajak * multiplier;
}

// Tax Calculation (Dynamic Config)
function calculatePajak(nsr, isRokok = false) {
    const config = JSON.parse(localStorage.getItem('siparek_config')) || {};

    // Default to 25% if not set
    const tarifPajak = (config.pajak?.tarif !== undefined ? config.pajak.tarif : 25) / 100;

    let pajak = nsr * tarifPajak;

    // Surcharge for tobacco/alcohol ads (Default +25%)
    if (isRokok) {
        const surchargePercent = (config.pajak?.rokok !== undefined ? config.pajak.rokok : 25) / 100;
        // Surcharge is calculated as percentage OF the tax amount, added to total
        // Formula: Tax + (Tax * Surcharge)
        pajak = pajak * (1 + surchargePercent);
    }

    return pajak;
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
