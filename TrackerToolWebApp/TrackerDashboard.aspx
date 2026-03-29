<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TrackerDashboard.aspx.cs" Inherits="TrackerToolWebApp.TrackerDashboard" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <script src="Scripts/services/orders.service.js"></script>
    <script src="Scripts/pages/tracker-dashboard.js"></script>

    <div class="container my-4">
        <div id="filterAccordion" class="custom-ui-accordion">

            <div class="custom-ui-accordion-item">

                <div class="custom-ui-accordion-header d-flex justify-content-between align-items-center">
                    <span class="custom-ui-accordion-bar"></span>
                    <span class="custom-ui-accordion-title">Select Filters</span>
                    <span class="custom-ui-accordion-arrow">
                        <span class="material-icons">expand_more</span>
                    </span>
                </div>

                <div class="custom-ui-accordion-content">

                    <div class="card shadow-sm">
                        <div class="card-body">

                            <!-- 🔽 Filter Type Dropdown -->
                            <div class="row mb-3">
                                <div class="col-md-4">
                                    <label class="form-label fw-semibold">Select Filter Type</label>
                                    <select id="filterType" class="form-select">
                                        <option value="">-- Select --</option>
                                        <option value="order">Order Number</option>
                                        <option value="service">Service Tag</option>
                                        <option value="date">Date Range</option>
                                    </select>
                                </div>
                            </div>

                            <!-- 🔤 Text Input (Order / Service Tag) -->
                            <div id="textFilterContainer" class="row mb-3 d-none">
                                <div class="col-md-4">
                                    <label id="textFilterLabel" class="form-label fw-semibold"></label>
                                    <input type="text" id="textFilterInput" class="form-control" placeholder="">
                                </div>
                            </div>

                            <!-- 📅 Date Range -->
                            <div id="dateFilterContainer" class="row mb-3 d-none">

                                <div class="col-md-3">
                                    <label class="form-label fw-semibold">Start Date</label>
                                    <div class="maximus-date-wrapper">
                                        <input class="form-control maximus-date-input start-date" id="startDate" placeholder="MM/DD/YYYY" />
                                        <span class="material-icons maximus-icon">calendar_today</span>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <label class="form-label fw-semibold">End Date</label>
                                    <div class="maximus-date-wrapper">
                                        <input class="form-control maximus-date-input end-date" id="endDate" placeholder="MM/DD/YYYY" />
                                        <span class="material-icons maximus-icon">calendar_today</span>
                                    </div>
                                </div>

                            </div>

                            <!-- 🔁 Retrieve From Google Toggle -->
                            <div id="googleToggleContainer" class="row mb-3 d-none">
                                <div class="col-md-6">

                                    <div class="d-flex align-items-center justify-content-start gap-3">

                                        <label for="googleToggle" class="fw-semibold mb-0">
                                            Retrieve from Google
                                        </label>

                                        <div class="form-check form-switch mb-0">
                                            <input class="form-check-input" type="checkbox" id="googleToggle">
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <!-- 🔘 Buttons -->
                            <div class="row">
                                <div class="col-md-6">
                                    <button type="button" id="applyFilters" class="btn btn-primary me-2">
                                        Apply Filters
                                    </button>
                                    <button type="button" id="resetFilters" class="btn btn-outline-secondary">
                                        Reset Filters
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>


        <!-- RESULTS -->
        <div class="page-card mt-4">
            <div class="page-card-header">
                Notifications <i class="bi bi-info-circle"></i>
            </div>
            <div class="p-3">
                <div id="orders-grid-container" class="d-none"></div>
            </div>
        </div>
    </div>


</asp:Content>
