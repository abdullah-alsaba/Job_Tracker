document.addEventListener("DOMContentLoaded", function () {
  const totalCount = document.getElementById("total-count");
  const interviewCount = document.getElementById("interview-count");
  const rejectedCount = document.getElementById("rejected-count");
  const jobCountText = document.getElementById("job-count");

  const allTab = document.getElementById("all-tab");
  const interviewTab = document.getElementById("interview-tab");
  const rejectedTab = document.getElementById("rejected-tab");

  const emptyState = document.getElementById("empty-state");

  let currentFilter = "all";

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

    checkEmptyState();
  }

  function filterJobs(status) {
    currentFilter = status;
    const jobs = document.querySelectorAll(".job-card");

    jobs.forEach(function (job) {
      if (status === "all") {
        job.style.display = "block";
      } else {
        job.style.display = job.dataset.status === status ? "block" : "none";
      }
    });

    checkEmptyState();
  }

  function checkEmptyState() {
    const visibleJobs = document.querySelectorAll(
      `.job-card${currentFilter === "all" ? "" : `[data-status="${currentFilter}"]`}`,
    );

    let count = 0;
    visibleJobs.forEach((job) => {
      if (job.style.display !== "none") {
        count++;
      }
    });

    if (count === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }

  document.querySelectorAll(".interview-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const jobCard = btn.closest(".job-card");
      jobCard.dataset.status = "interview";

      const badge = jobCard.querySelector(".status-badge");
      badge.innerText = "Interview";

      badge.classList.remove("bg-[#EEF4FF]");
      badge.classList.add("bg-green-500", "text-white");

      updateCounts();
      filterJobs(currentFilter);
    });
  });

  document.querySelectorAll(".reject-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const jobCard = btn.closest(".job-card");
      jobCard.dataset.status = "rejected";

      const badge = jobCard.querySelector(".status-badge");
      badge.innerText = "Rejected";

      badge.classList.remove("bg-[#EEF4FF]");
      badge.classList.add("bg-red-500", "text-white");

      updateCounts();
      filterJobs(currentFilter);
    });
  });

  document.querySelectorAll(".delete-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const jobCard = btn.closest(".job-card");
      jobCard.remove();

      updateCounts();
      filterJobs(currentFilter);
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
