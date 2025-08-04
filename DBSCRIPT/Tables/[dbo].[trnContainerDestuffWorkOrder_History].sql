USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnContainerDestuffWorkOrder_History]    Script Date: 1/2/2024 4:21:45 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnContainerDestuffWorkOrder_History](
	[trnContainerDestuffWorkOrder_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnContainerDestuffWorkOrderID] [bigint] NOT NULL,
	[trnContainerDestuffWorkOrderPrefix] [varchar](20) NULL,
	[trnContainerDestuffWorkOrderNo] [varchar](255) NULL,
	[Surveyor] [varchar](255) NULL,
	[SurveyorID] [int] NULL,
	[Vendor] [varchar](255) NULL,
	[VendorID] [int] NULL,
	[Remarks] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsApproved] [bit] NOT NULL,
	[ApproveRemarks] [varchar](255) NULL,
	[UnApproveRemarks] [varchar](255) NULL,
	[ApprovedDate] [datetime] NULL,
	[IsFinished] [bit] NOT NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrder_History] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrder_History] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


