USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnContainerDestuffWorkOrder]    Script Date: 1/2/2024 4:25:05 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


ALTER TRIGGER [dbo].[TGR_trnContainerDestuffWorkOrder]
 ON  [dbo].[trnContainerDestuffWorkOrder]
   AFTER INSERT,UPDATE
   AS
   DECLARE @Caption varchar(50)
   DECLARE @IsFinished BIT
    DECLARE @IsApproved BIT
   DECLARE @IsLoaded BIT
   IF EXISTS(SELECT * FROM Inserted)
   Begin
		IF EXISTS(SELECT * FROM Deleted)
			set @Caption = 'Edit'
		ELSE
			set @Caption = 'Insert'
		
	END
	SET @IsFinished = (SELECT IsFinished FROM Inserted)
	SET @IsApproved = (SELECT IsApproved FROM Inserted)	
    IF(@IsFinished = 0)
	BEGIN
			IF NOT EXISTS (SELECT * FROM Inserted p
				JOIN Deleted AS i ON
				p.[trnContainerDestuffWorkOrderID] = i.[trnContainerDestuffWorkOrderID]
				and p.[trnContainerDestuffWorkOrderPrefix]=i.[trnContainerDestuffWorkOrderPrefix]
				and p.[trnContainerDestuffWorkOrderNo]=i.[trnContainerDestuffWorkOrderNo]
				and p.[Surveyor] = i.[Surveyor]
				and p.[SurveyorID] = i.[SurveyorID]
				and p.[Vendor] = i.[Vendor]
				and p.[VendorID] = i.[VendorID]
				and p.[Remarks] = i.[Remarks]				
				and P.[Flagdeleted] = i.[Flagdeleted]
				and p.[IsApproved] = i.[IsApproved]
				and P.[ApproveRemarks] = i.[ApproveRemarks]
				and p.[UnApproveRemarks] = i.[UnApproveRemarks]
				and p.[IsFinished] = i.[IsFinished]
				and p.[UpdatedBy]=i.[UpdatedBy]
				and p.[UpdatedDate] =i.[UpdatedDate]
				and p.[Createdby] =i.[Createdby]
				and p.[CreatedDate] =i.[CreatedDate]
				and p.[YearID] = i.[YearID]
			)
			BEGIN
				SET NOCOUNT ON;
				INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnContainerDestuffWorkOrder_History]
									([trnContainerDestuffWorkOrderID],[Surveyor],[SurveyorID],[Vendor],[VendorID],[Remarks],[Flagdeleted],[Createdby]
									,[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],[IsApproved], [ApproveRemarks], [UnApproveRemarks],[IsFinished],[YearID])
							SELECT [trnContainerDestuffWorkOrderID],[Surveyor],[SurveyorID],[Vendor],[VendorID],[Remarks],[Flagdeleted],[Createdby],[CreatedDate]
							,[UpdatedBy],[UpdatedDate],@Caption,[IsApproved], [ApproveRemarks], [UnApproveRemarks],[IsFinished],[YearID] FROM Inserted
			END
	END
	ELSE IF (EXISTS (SELECT * FROM Inserted p
			JOIN Deleted AS i ON
			p.[trnContainerDestuffWorkOrderID] = i.[trnContainerDestuffWorkOrderID]	
			where
				(p.[Surveyor] <> i.[Surveyor]
				or p.[SurveyorID] <> i.[SurveyorID]
				or p.[Vendor] <> i.[Vendor]
				or p.[VendorID] <> i.[VendorID]
				or p.[Remarks] <> i.[Remarks]				
				or p.[IsApproved] <> i.[IsApproved]
				or P.[ApproveRemarks] <> i.[ApproveRemarks]
				or p.[UnApproveRemarks] <> i.[UnApproveRemarks])
		))
		BEGIN
			SET NOCOUNT ON;
				INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnContainerDestuffWorkOrder_History]
									([trnContainerDestuffWorkOrderID],[trnContainerDestuffWorkOrderPrefix],[trnContainerDestuffWorkOrderNo],[Surveyor],[SurveyorID],[Vendor],[VendorID],[Remarks]
									,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],[IsApproved], [ApproveRemarks], [UnApproveRemarks],[IsFinished],[YearID])
							SELECT [trnContainerDestuffWorkOrderID],[trnContainerDestuffWorkOrderPrefix],[trnContainerDestuffWorkOrderNo],[Surveyor],[SurveyorID],[Vendor],[VendorID],[Remarks]
									,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption,[IsApproved], [ApproveRemarks], [UnApproveRemarks],[IsFinished],[YearID] FROM Inserted
		END
	ELSE
	BEGIN
		IF NOT EXISTS (SELECT * FROM Inserted p
			JOIN Deleted AS i ON
			p.[trnContainerDestuffWorkOrderID] = i.[trnContainerDestuffWorkOrderID]
			and p.[trnContainerDestuffWorkOrderPrefix] = i.[trnContainerDestuffWorkOrderPrefix]
			and p.[trnContainerDestuffWorkOrderNo] = i.[trnContainerDestuffWorkOrderNo]
			and p.[IsFinished]=i.[IsFinished]
			and p.[Flagdeleted] =i.[Flagdeleted]
		)
		BEGIN
			SET NOCOUNT ON;
			UPDATE [CFS_BONDED_WAREHOUSE_History].[dbo].[trnContainerDestuffWorkOrder_History]
			SET   [trnContainerDestuffWorkOrderPrefix] = inserted.[trnContainerDestuffWorkOrderPrefix],
				  [trnContainerDestuffWorkOrderNo] = inserted.[trnContainerDestuffWorkOrderNo],
				  [IsFinished]=inserted.[IsFinished],
				  [Flagdeleted] =inserted.[Flagdeleted]
			FROM [CFS_BONDED_WAREHOUSE_History].[dbo].[trnContainerDestuffWorkOrder_History]
			INNER JOIN  inserted ON [trnContainerDestuffWorkOrder_History].[trnContainerDestuffWorkOrderID] = inserted.[trnContainerDestuffWorkOrderID]
		END
	END	

GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrder] ENABLE TRIGGER [TGR_trnContainerDestuffWorkOrder]
GO


