import React from "react";

const QueryResponse = ({ message }) => {
  return (
    <>
      {message && (
        <div className="pl-40 pt-20">
          <div className="overflow-auto h-80 text-white p-16">
            <div className="flex justify-end m-3">
              <h1 className=" p-2 bg-[#393939] rounded-full  w-fit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                iste. Consequuntur nihil,
              </h1>
            </div>
            <div className="flex gap-2 justify-start items-center mb-5">
              <img
                src="/images/Bianat.png"
                alt="queryresponse"
                className="rounded-full p-1 bg-[#393939] border"
              />
              <h1>{message}</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium molestias enim laboriosam velit ut aliquam ducimus.
              Nostrum laudantium, autem saepe alias facere explicabo amet
              similique quam debitis, nisi, est pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium molestias enim laboriosam velit ut aliquam ducimus.
              Nostrum laudantium, autem saepe alias facere explicabo amet
              similique quam debitis, nisi, est pariatur.
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium molestias enim laboriosam velit ut aliquam ducimus.
              Nostrum laudantium, autem saepe alias facere explicabo amet
              similique quam debitis, nisi, est pariatur.
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium molestias enim laboriosam velit ut aliquam ducimus.
              Nostrum laudantium, autem saepe alias facere explicabo amet
              similique quam debitis, nisi, est pariatur.
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium molestias enim laboriosam velit ut aliquam ducimus.
              Nostrum laudantium, autem saepe alias facere explicabo amet
              similique quam debitis, nisi, est pariatur.
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
              vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
              ultrices nec congue eget, auctor vitae massa. Fusce luctus
              vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed
              ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis
              imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
              venenatis. Integer fringilla congue eros non fermentum. Sed
              dapibus pulvinar nibh tempor porta.
            </p>
            <p>
              Cras ac libero elit. Proin vel ligula commodo, sodales augue a,
              feugiat nisi. Duis dapibus libero ac lectus volutpat, in sodales
              magna facilisis. Phasellus vehicula bibendum lorem, eget fermentum
              sem aliquam non. Nullam nec nulla enim. Phasellus euismod nisi nec
              tortor ullamcorper, eget efficitur turpis dictum. Vestibulum sit
              amet mattis tortor. Fusce ac ante ex. Sed nec metus sit amet arcu
              vehicula faucibus sit amet ut dolor. Sed vulputate, orci a aliquet
              vehicula, odio mauris malesuada dui, eget pulvinar orci lacus at
              ipsum. Ut ut dolor vitae ante bibendum convallis.
            </p>
            <p>
              Cras ac libero elit. Proin vel ligula commodo, sodales augue a,
              feugiat nisi. Duis dapibus libero ac lectus volutpat, in sodales
              magna facilisis. Phasellus vehicula bibendum lorem, eget fermentum
              sem aliquam non. Nullam nec nulla enim. Phasellus euismod nisi nec
              tortor ullamcorper, eget efficitur turpis dictum. Vestibulum sit
              amet mattis tortor. Fusce ac ante ex. Sed nec metus sit amet arcu
              vehicula faucibus sit amet ut dolor. Sed vulputate, orci a aliquet
              vehicula, odio mauris malesuada dui, eget pulvinar orci lacus at
              ipsum. Ut ut dolor vitae ante bibendum convallis.
            </p>
            <p>
              Cras ac libero elit. Proin vel ligula commodo, sodales augue a,
              feugiat nisi. Duis dapibus libero ac lectus volutpat, in sodales
              magna facilisis. Phasellus vehicula bibendum lorem, eget fermentum
              sem aliquam non. Nullam nec nulla enim. Phasellus euismod nisi nec
              tortor ullamcorper, eget efficitur turpis dictum. Vestibulum sit
              amet mattis tortor. Fusce ac ante ex. Sed nec metus sit amet arcu
              vehicula faucibus sit amet ut dolor. Sed vulputate, orci a aliquet
              vehicula, odio mauris malesuada dui, eget pulvinar orci lacus at
              ipsum. Ut ut dolor vitae ante bibendum convallis.
            </p>
            {/* Repeat the paragraphs or add more text as needed */}
          </div>
        </div>
      )}
    </>
  );
};

export default QueryResponse;