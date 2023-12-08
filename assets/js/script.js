/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    //  $('.btn-sidebar-toggle') 
    // init on mobile
    $(function () {
        if (window.matchMedia('(max-width: 991px)').matches) {
            $('body').addClass('sidebar-collapsed');
        } else {
            $('body').removeClass('sidebar-collapsed');
        }

        $(window).resize(function () {
            if (window.matchMedia('(max-width: 991px)').matches) {
                $('body').addClass('sidebar-collapsed');
            } else {
                $('body').removeClass('sidebar-collapsed');
            }
        })
    })

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    var options = {
      grid: {
        show: true,
        borderColor: "#F3F3F8",
        strokeDashArray: 0,
        position: "back",
      },
      colors: ["#5964E0", "#E6E6EC"],
      series: [
        {
          name: "PRODUCT A",
          data: [
            3, 2, 1, 3, 0, 0, 2, 4, 3, 0, 2, 2, 0, 3, 1, 3, 3, 0, 0, 1, 3, 2, 0,
            0, 1, 4, 2, 3, 2, 3,
          ],
        },
        {
          name: "PRODUCT B",
          data: [
            1, 2, 2, 2, 0, 0, 3, 1, 1, 0, 2, 1, 0, 2, 2, 2, 2, 0, 0, 4, 2, 3, 0,
            0, 3, 1, 2, 1, 2, 1,
          ],
        },
      ],
  
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
  
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      dataLabels: {
        enabled: true,
        formatter: function (value, opts) {
          // console.log(opts);
          let percent =
            opts.w.globals.seriesPercent[opts.seriesIndex][opts.dataPointIndex];
          // Show data label only for 'PRODUCT A'
          return opts.seriesIndex === 0 ? percent.toFixed(0) + "%" : "";
        },
        offsetY: 0,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
  
      xaxis: {
        labels: {
          style: {
            fontSize: "16px",
            colors: "#999A9F",
          },
        },
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        min: 0,
        max: 5,
        tickAmount: 4,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter: function (value, opts) {
            let percent =
              opts.w.globals.seriesPercent[opts.seriesIndex][opts.dataPointIndex];
            return percent.toFixed(0) + "%";
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "bottom",
        offsetY: 10,
      },
      fill: {
        opacity: 1,
      },
    };
  
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();





    $(function () {
        $('.btn-sidebar-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-collapsed');
        })
        $('.navbar-logo').on('click', function (e) {
            if ($('body').hasClass('sidebar-collapsed')) {
                e.preventDefault();
                $('body').toggleClass('sidebar-collapsed');
            }
        })
    })


       // Toggle password and icon visibility Password field
       $(".password-field .eye-hide-icon").click(function () {
        var passwordInput = $(this).parent().parent().find("input[type='password']");
        passwordInput.attr("type", "text");

        $(this).parent().find(".eye-show-icon").show();
        $(this).hide();
    });

    $(".password-field .eye-show-icon").click(function () {
        var passwordInput = $(this).parent().parent().find("input[type='text']");
        passwordInput.attr("type", "password");

        $(this).parent().find(".eye-hide-icon").show();
        $(this).hide();
    });

    

  // slide Toggle
  $(".quick-feedback-heading").click(function () {
    $(".feedback-body").slideToggle();
    $(this).toggleClass('active')
  });


  // slide Toggle2
  $('.chatbot-friend-list .chatbot-toggle').on('click', function () {
    // Get the current chatbot body
    const currentChatbotBody = $(this).parent().find('.chatbot-body');

    // Toggle class and slide
    currentChatbotBody.slideToggle(400, function () {
      currentChatbotBody.toggleClass('chatbot-body-active');
    });
  });

    
    // datepicker init
    $(function () {
        if ($('.datepicker').length) {
            $('.datepicker').datepicker();
        }
    })


    //book toggle 

    const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
  item.addEventListener('click', event => {
    event.stopPropagation(); // Prevent the click event from bubbling up and closing the dropdown
  });
});


});



// datepicker js init
$(".datepicker").datepicker({
    beforeShowDay: function (date) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
        return [true, date1 && (date.getTime() == date1.getTime() || date2 && date >= date1 && date <= date2) ? "dp-highlight" : ""];
    },
    onSelect: function (dateText, inst) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
        var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
        if (!date1 || date2) {
            $("#input1").val(dateText);
            $("#input2").val("");
            $(this).datepicker();
        } else if (selectedDate < date1) {
            $("#input2").val($("#input1").val());
            $("#input1").val(dateText);
            $(this).datepicker();
        } else {
            $("#input2").val(dateText);
            $(this).datepicker();
        }
    }
});

