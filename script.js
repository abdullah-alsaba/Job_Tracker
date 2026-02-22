document.addEventListener("DOMContentLoaded", function () {
  const totalCount = document.getElementById("total-count");
  const interviewCount = document.getElementById("interview-count");
  const rejectedCount = document.getElementById("rejected-count");
  const jobCountText = document.getElementById("job-count");

  const allTab = document.getElementById("all-tab");
  const interviewTab = document.getElementById("interview-tab");
  const rejectedTab = document.getElementById("rejected-tab");

  const emptyState = document.getElementById("empty-state");

  function updateCounts() {
    const allJobs = document.querySelectorAll(".job-card");
    const interviewJobs = document.querySelectorAll(
      '.job-card[data-status="interview"]',
    );
    const rejectedJobs = document.querySelectorAll(
      '.job-card[data-status="rejected"]',
    );

    totalCount.innerText = allJobs.length;
    interviewCount.innerText = interviewJobs.length;
    rejectedCount.innerText = rejectedJobs.length;
    jobCountText.innerText = allJobs.length + " Jobs";

    if (allJobs.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }

  function filterJobs(status) {
    const jobs = document.querySelectorAll(".job-card");

    jobs.forEach(function (job) {
      if (status === "all") {
        job.style.display = "block";
      } else {
        if (job.dataset.status === status) {
          job.style.display = "block";
        } else {
          job.style.display = "none";
        }
      }
    });
  }

  const interviewButtons = document.querySelectorAll(".interview-btn");
  interviewButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const jobCard = btn.closest(".job-card");
      jobCard.dataset.status = "interview";

      const badge = jobCard.querySelector(".status-badge");
      badge.innerText = "Interview";

      updateCounts();
    });
  });

  const rejectButtons = document.querySelectorAll(".reject-btn");
  rejectButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const jobCard = btn.closest(".job-card");
      jobCard.dataset.status = "rejected";

      const badge = jobCard.querySelector(".status-badge");
      badge.innerText = "Rejected";

      updateCounts();
    });
  });

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const jobCard = btn.closest(".job-card");
      jobCard.remove();
      updateCounts();
    });
  });

  allTab.addEventListener("click", function () {
    filterJobs("all");
  });

  interviewTab.addEventListener("click", function () {
    filterJobs("interview");
  });

  rejectedTab.addEventListener("click", function () {
    filterJobs("rejected");
  });

  updateCounts();
});
