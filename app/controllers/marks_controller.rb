class MarksController < ApplicationController
  before_action :require_current_user, except: []
  before_action :set_mark, only: [:show, :edit, :update, :destroy]

  # GET /marks
  # GET /marks.json
  def index
    authorize! :mark_read, Mark
    @marks = Mark.where(student_id: current_user.id)
    logger.info @marks
  end

  # GET /marks/1
  # GET /marks/1.json
  def show
    authorize! :mark_read, @mark
  end

  # GET /marks/new
  def new
    authorize! :mark_create, Mark
    @mark = Mark.new
  end

  # GET /marks/1/edit
  def edit
    authorize! :mark_update, @mark
  end

  # POST /marks
  # POST /marks.json
  def create
    authorize! :mark_create, Mark
    logger.info "teacher id is " + mark_params['teacher_id']
    user = User.find(mark_params['teacher_id'])
    logger.info "User is " + user.to_json
    @mark = Mark.new(
      value: mark_params['value'], discipline_id: mark_params['discipline_id'],
      teacher_id: user.id, student_id: current_user.id
    )

    respond_to do |format|
      if @mark.save
        format.html { redirect_to @mark, notice: 'Mark was successfully created.' }
        format.json { render :show, status: :created, location: @mark }
      else
        format.html { render :new }
        format.json { render json: @mark.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /marks/1
  # PATCH/PUT /marks/1.json
  def update
    authorize! :mark_update, @mark
    respond_to do |format|
      if @mark.update(mark_params)
        format.html { redirect_to @mark, notice: 'Mark was successfully updated.' }
        format.json { render :show, status: :ok, location: @mark }
      else
        format.html { render :edit }
        format.json { render json: @mark.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /marks/1
  # DELETE /marks/1.json
  def destroy
    authorize! :mark_destroy, @mark
    @mark.destroy
    respond_to do |format|
      format.html { redirect_to marks_url, notice: 'Mark was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mark
      @mark = Mark.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mark_params
      params.require(:mark).permit(:value, :discipline_id, :date, :teacher_id)
    end
end
