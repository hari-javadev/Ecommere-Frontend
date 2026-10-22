/**
 * Webpage Security & Anti-Inspection Module
 * 
 * Provides client-side interaction restrictions:
 * 1. Blocks Developer Tools shortcuts (F12, Ctrl+Shift+I/J/C, Cmd+Option+I/J/C).
 * 2. Blocks right-click context menu with user notification.
 * 3. Restricts Copy, Cut, Paste, and Select-All outside of form controls.
 * 4. Disables HTML5 Drag and Drop (images, text, links, file drop).
 * 5. Prevents viewing source (Ctrl+U / Cmd+Option+U) and saving pages (Ctrl+S).
 * 6. Preserves functional form inputs, textareas, and buttons.
 *
 * NOTE: Client-side JavaScript cannot fully prevent DevTools, copying,
 * screenshots, or web scraping. This serves as a friction-based deterrent.
 */

(function (window, document) {
    'use strict';

    const SecurityConfig = {
        enableDevToolsBlock: true,
        enableContextMenuBlock: true,
        enableCopyPasteBlock: true,
        enableDragDropBlock: true,
        enableViewSourceBlock: true,
        allowFormInputs: true,
        warningDuration: 3000,
        warningMessages: {
            devTools: 'Developer Tools and page inspection are restricted on this website.',
            copyPaste: 'Copying or pasting content from this webpage is disabled.',
            contextMenu: 'Right-click context menu is disabled to protect website content.',
            dragDrop: 'Dragging or dropping elements on this page is disabled.'
        }
    };

    /**
     * Check if an event target is an interactive form element
     */
    function isFormElement(target) {
        if (!target) return false;
        const tagName = target.tagName ? target.tagName.toUpperCase() : '';
        const isEditable = target.isContentEditable || (target.getAttribute && target.getAttribute('contenteditable') === 'true');
        return (
            tagName === 'INPUT' ||
            tagName === 'TEXTAREA' ||
            tagName === 'SELECT' ||
            isEditable
        );
    }

    /**
     * Toast notification utility
     */
    let activeToast = null;
    let toastTimeout = null;

    function showSecurityWarning(message) {
        if (!document.body) return;

        if (!activeToast) {
            activeToast = document.createElement('div');
            activeToast.className = 'security-alert-toast';
            activeToast.setAttribute('role', 'alert');
            activeToast.innerHTML = `
                <span class="toast-icon">⚠️</span>
                <span class="toast-message"></span>
            `;
            document.body.appendChild(activeToast);
        }

        const msgSpan = activeToast.querySelector('.toast-message');
        if (msgSpan) {
            msgSpan.textContent = message;
        }

        activeToast.classList.add('show');

        if (toastTimeout) {
            clearTimeout(toastTimeout);
        }

        toastTimeout = setTimeout(function () {
            if (activeToast) {
                activeToast.classList.remove('show');
            }
        }, SecurityConfig.warningDuration);
    }

    /**
     * 1. Developer Tools & Shortcut Blocking
     */
    function handleKeyDown(e) {
        const key = e.key || '';
        const keyCode = e.keyCode || e.which;
        const isCtrlOrCmd = e.ctrlKey || e.metaKey;
        const isShift = e.shiftKey;
        const isAltOrOption = e.altKey;

        // F12 key
        if (SecurityConfig.enableDevToolsBlock && (key === 'F12' || keyCode === 123)) {
            e.preventDefault();
            e.stopPropagation();
            showSecurityWarning(SecurityConfig.warningMessages.devTools);
            return false;
        }

        // Developer Tools: Ctrl+Shift+I / Cmd+Option+I
        // Developer Tools: Ctrl+Shift+J / Cmd+Option+J (Console)
        // Developer Tools: Ctrl+Shift+C / Cmd+Option+C (Inspect Element)
        // Firefox Console: Ctrl+Shift+K
        const isDevToolsCombo =
            (isCtrlOrCmd && isShift && (key === 'I' || key === 'i' || key === 'J' || key === 'j' || key === 'C' || key === 'c' || key === 'K' || key === 'k')) ||
            (e.metaKey && isAltOrOption && (key === 'I' || key === 'i' || key === 'J' || key === 'j' || key === 'C' || key === 'c'));

        if (SecurityConfig.enableDevToolsBlock && isDevToolsCombo) {
            e.preventDefault();
            e.stopPropagation();
            showSecurityWarning(SecurityConfig.warningMessages.devTools);
            return false;
        }

        // View Source: Ctrl+U / Cmd+Option+U
        if (SecurityConfig.enableViewSourceBlock) {
            if ((isCtrlOrCmd && (key === 'u' || key === 'U')) || (e.metaKey && isAltOrOption && (key === 'u' || key === 'U'))) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityWarning(SecurityConfig.warningMessages.devTools);
                return false;
            }

            // Save Page: Ctrl+S / Cmd+S
            if (isCtrlOrCmd && (key === 's' || key === 'S')) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityWarning('Saving the webpage is disabled.');
                return false;
            }

            // Print Page: Ctrl+P / Cmd+P
            if (isCtrlOrCmd && (key === 'p' || key === 'P')) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityWarning('Printing this webpage is disabled.');
                return false;
            }
        }

        // Copy, Cut, Paste, Select-All: Ctrl/Cmd + C, X, V, A outside of form controls
        if (SecurityConfig.enableCopyPasteBlock) {
            if (SecurityConfig.allowFormInputs && isFormElement(e.target)) {
                return true; // allow normal input editing
            }

            if (isCtrlOrCmd && (key === 'c' || key === 'C' || key === 'x' || key === 'X' || key === 'v' || key === 'V' || key === 'a' || key === 'A')) {
                e.preventDefault();
                e.stopPropagation();
                showSecurityWarning(SecurityConfig.warningMessages.copyPaste);
                return false;
            }
        }
    }

    /**
     * 2. Right-Click Context Menu Blocking
     */
    function handleContextMenu(e) {
        if (!SecurityConfig.enableContextMenuBlock) return;

        // If configured, allow standard context menu on text inputs for convenience
        if (SecurityConfig.allowFormInputs && isFormElement(e.target)) {
            return true;
        }

        e.preventDefault();
        e.stopPropagation();
        showSecurityWarning(SecurityConfig.warningMessages.contextMenu);
        return false;
    }

    /**
     * 3. Clipboard Event Blocking (copy, cut, paste)
     */
    function handleClipboardEvent(e) {
        if (!SecurityConfig.enableCopyPasteBlock) return;

        if (SecurityConfig.allowFormInputs && isFormElement(e.target)) {
            return true;
        }

        e.preventDefault();
        e.stopPropagation();
        showSecurityWarning(SecurityConfig.warningMessages.copyPaste);
        return false;
    }

    /**
     * 4. Text Selection Blocking
     */
    function handleSelectStart(e) {
        if (!SecurityConfig.enableCopyPasteBlock) return;

        if (SecurityConfig.allowFormInputs && isFormElement(e.target)) {
            return true;
        }

        e.preventDefault();
        return false;
    }

    /**
     * 5. Drag and Drop Blocking
     */
    function handleDragDropEvent(e) {
        if (!SecurityConfig.enableDragDropBlock) return;

        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    /**
     * Prevent dragging on all existing and dynamically inserted images & links
     */
    function disableElementDragging() {
        const preventDrag = function (el) {
            el.setAttribute('draggable', 'false');
            el.addEventListener('dragstart', function (e) {
                e.preventDefault();
                return false;
            });
        };

        document.querySelectorAll('img, a').forEach(preventDrag);

        // Observe future DOM changes to protect dynamically rendered products/images
        if (typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.nodeType === 1) { // ELEMENT_NODE
                            if (node.matches && (node.matches('img') || node.matches('a'))) {
                                preventDrag(node);
                            }
                            if (node.querySelectorAll) {
                                node.querySelectorAll('img, a').forEach(preventDrag);
                            }
                        }
                    });
                });
            });

            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    /**
     * 6. Window-Resize DevTools Heuristic Detection
     */
    function initDevToolsDetection() {
        const threshold = 160;
        let isDevToolsOpen = false;

        const checkDimensions = function () {
            const widthDiff = window.outerWidth - window.innerWidth > threshold;
            const heightDiff = window.outerHeight - window.innerHeight > threshold;

            if (widthDiff || heightDiff) {
                if (!isDevToolsOpen) {
                    isDevToolsOpen = true;
                    showSecurityWarning(SecurityConfig.warningMessages.devTools);
                }
            } else {
                isDevToolsOpen = false;
            }
        };

        window.addEventListener('resize', checkDimensions, { passive: true });
    }

    /**
     * Initialize all protections
     */
    function initSecurity() {
        // Keyboard shortcuts
        window.addEventListener('keydown', handleKeyDown, true);

        // Context menu (right-click)
        document.addEventListener('contextmenu', handleContextMenu, true);

        // Clipboard events
        document.addEventListener('copy', handleClipboardEvent, true);
        document.addEventListener('cut', handleClipboardEvent, true);
        document.addEventListener('paste', handleClipboardEvent, true);

        // Text selection
        document.addEventListener('selectstart', handleSelectStart, true);

        // Drag & drop lifecycle events
        const dragEvents = ['dragstart', 'dragover', 'dragenter', 'dragleave', 'drop'];
        dragEvents.forEach(function (eventName) {
            document.addEventListener(eventName, handleDragDropEvent, false);
            window.addEventListener(eventName, handleDragDropEvent, false);
        });

        // Draggable attribute on images & links
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () {
                disableElementDragging();
                initDevToolsDetection();
            });
        } else {
            disableElementDragging();
            initDevToolsDetection();
        }
    }

    // Initialize automatically
    initSecurity();

    // Expose optional customization API
    window.WebSecurity = {
        config: SecurityConfig,
        showWarning: showSecurityWarning
    };

})(window, document);
