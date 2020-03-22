class DisciplinesController < ApplicationController
  before_action :require_current_user, except: []
  before_action :set_discipline, only: [:show, :edit, :update, :destroy]

  # GET /disciplines
  # GET /disciplines.json
  def index
    authorize! :discipline_read, Discipline
    @disciplines = Discipline.all
  end

  # GET /disciplines/1
  # GET /disciplines/1.json
  def show
    authorize! :discipline_read, @discipline
  end

  # GET /disciplines/new
  def new
    authorize! :discipline_create, @discipline
    @discipline = Discipline.new
  end

  # GET /disciplines/1/edit
  def edit
    authorize! :discipline_update, @discipline
  end

  # POST /disciplines
  # POST /disciplines.json
  def create
    authorize! :discipline_create, @discipline
    @discipline = Discipline.new(discipline_params)

    respond_to do |format|
      if @discipline.save
        format.html { redirect_to @discipline, notice: 'Discipline was successfully created.' }
        format.json { render :show, status: :created, location: @discipline }
      else
        format.html { render :new }
        format.json { render json: @discipline.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /disciplines/1
  # PATCH/PUT /disciplines/1.json
  def update
    authorize! :discipline_update, @discipline
    respond_to do |format|
      if @discipline.update(discipline_params)
        format.html { redirect_to @discipline, notice: 'Discipline was successfully updated.' }
        format.json { render :show, status: :ok, location: @discipline }
      else
        format.html { render :edit }
        format.json { render json: @discipline.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /disciplines/1
  # DELETE /disciplines/1.json
  def destroy
    authorize! :discipline_destroy, @discipline
    @discipline.destroy
    respond_to do |format|
      format.html { redirect_to disciplines_url, notice: 'Discipline was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_discipline
      @discipline = Discipline.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def discipline_params
      params.require(:discipline).permit(:name, :mod_id)
    end
end
